import "reflect-metadata"
import express, { Router } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { AppDataSource } from "./data-source"
import ANPController from './controller/protected-area.controller'
import UserController from './controller/user.controller'
import TicketController from './controller/ticket-controller'
import settings from './config/settings'
import JWTStrategy from "./middleware/authentication"
import passport from "passport"

//CONFIG
const PORT = settings.PORT;
const app = express();
const router = Router();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
passport.use(JWTStrategy)
app.use(router);

//ROUTES LOADING
router.use( "/anp", passport.authenticate('jwt',{ session: false}), ANPController);
router.use( "/ticket", passport.authenticate('jwt',{ session: false}), TicketController);
router.use( "/user", UserController);

//CONNECTION
async function main() {
    await AppDataSource.initialize();
    console.log("Database connected")
    app.listen(PORT);
    console.log("TicketFast Server listening on port",  PORT)
};

main();