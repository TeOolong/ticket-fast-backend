import { Router } from "express";
import { autheticateUser, checkAuthentication, createUser, findUserByEmail } from "../service/user.service";

const router = Router();

router.post('/create' , (req,res) => createUser(req, res));
router.post('/token', (req, res) => checkAuthentication(req, res));
router.post('/authenticate' , (req,res) => autheticateUser(req, res));
router.post('/email' , (req,res) => findUserByEmail(req, res));

export default router;