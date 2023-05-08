import { Request, Response } from "express"
import { Ticket } from "../entity/Ticket";
import { ProtectedArea } from "../entity/ProtectedArea";
import { createPayment } from "../service/payment.service";
import { TicketBean } from "../dtos/TicketBean";
import { BeanUtils } from "../utils/bean-utils";

export const createTicket = async(req: Request, res: Response) => {
    try {
        const bean : TicketBean = req.body
        const protectedArea = await ProtectedArea.findOneBy({id: bean.protectedAreaId});
        const payment = await createPayment(bean.payment);
        const ticket = new Ticket();
        BeanUtils.copyProperties(bean, ticket);
        if(payment) ticket.payment = payment;
        if(protectedArea )ticket.protectedArea = protectedArea;
        const date = new Date()
        ticket.buyingDate = date;
        //DEFAULT A WEEK LATER ON
        date.setDate(date.getDate() + 7)
        ticket.ticketDate = date;
        for(let i=Number(payment?.ticketQuantity); i--;)
            await ticket.save();
        
        return res.status(200).json("Tickets purchased successfully");
    } catch(error) {
        if(error instanceof Error)
            return res.status(500).json({message: error.message});
    }
}