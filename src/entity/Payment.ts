import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity({name: "PAYMENT"})
export class Payment extends BaseEntity {
    
    @PrimaryGeneratedColumn({name: "PAYMENT_ID"})
    id: number
    
    @Column({ nullable: false, name: "PAYMENT_TOTAL" })
    total: number

    @Column({ nullable: false, name: "PAYMENT_TQUANTITY" })
    ticketQuantity: number

    @ManyToOne((type) => User)
    @JoinColumn({name: "USER_ID", referencedColumnName: "id"})
    user: User
    
}