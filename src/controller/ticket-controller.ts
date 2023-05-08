import { Router } from "express";
import { createTicket } from "../service/ticket.service";

const router = Router();

router.post('/create' , (req,res) => createTicket(req, res));

export default router;