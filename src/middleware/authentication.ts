import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import settings from "../config/settings";
import { User } from "../entity/User";

export default new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: settings.SECRET
}, async(payload, done) => {
    try {
        console.log(payload)
        const user = await User.findOneBy({id: payload.id})
        if(user) {
            return done(null, user)
        }
        return done(null, false)
    } catch(error) {
        return done(error);
    }
})