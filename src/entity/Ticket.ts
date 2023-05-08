import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { ProtectedArea } from "./ProtectedArea"
import { Payment } from "./Payment"

@Entity({name: "TICKET"})
export class Ticket extends BaseEntity {
    
    @PrimaryGeneratedColumn({name: "TICKET_ID"})
    id: number
    
    @Column({ nullable: false, name: "TICKET_BDATE" })
    buyingDate: Date

    @Column({ nullable: false, name: "TICKET_TDATE" })
    ticketDate: Date

    @ManyToOne((type) => ProtectedArea)
    @JoinColumn({name: "ANP_ID", referencedColumnName: "id"})
    protectedArea: ProtectedArea

    @ManyToOne((type) => Payment)
    @JoinColumn({name: "PAYMENT_ID", referencedColumnName: "id"})
    payment: Payment

}