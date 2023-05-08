import { Request, Response } from "express"
import { User } from "../entity/User";
import { UserBean } from "../dtos/UserBean";
import { BeanUtils } from "../utils/bean-utils";
import jwt, { verify } from 'jsonwebtoken';
import settings from '../config/settings'
import bcrypt from 'bcrypt';


export const createUser = async(req: Request, res: Response) => {
    try {
        const bean : UserBean = req.body;
        bean.password = await bcrypt.hash(bean.password, 10);
        const model = new User();
        BeanUtils.copyProperties(bean, model);
        model.password
        await model.save();
        return res.status(200).json(model);
    } catch(error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message});
    }
}

export const findUserByEmail = async(req: Request, res: Response) => {
    try {
        const email : string = req.body.email;
        console.log(req.body)
        const user = await User.findOneBy({email: email});
        if(user){
            return res.status(200).json(true);
        }
        return res.status(200).json(false);
    } catch(error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message});
    }
}

export const checkAuthentication = async(req: Request, res: Response) => {
    try {
        const payload = verify(req.body.token, settings.SECRET)
        if(payload) {
            return res.status(200).json(payload);
        }
        return res.status(401).json({message: "Permission denied"})
    }
    catch(error) {
        return res.status(401).json({message: "Permission denied"})
    }

}

export const autheticateUser = async(req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        console.log(password)
        const user = await User.findOneBy({email: email})
        if(user){
            if(await bcrypt.compare(password, user.password)){
                const token = await createToken(user);
                return res.status(200).json({
                    user,
                    token
                })
            }
        }
        return res.status(401).json({message: "Permission denied"})
    } catch(error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message});
    }
}

const createToken = async(user: any) => {
    return jwt.sign({id: user.id, email: user.email}, settings.SECRET, {
        expiresIn: 600000
    })
}


