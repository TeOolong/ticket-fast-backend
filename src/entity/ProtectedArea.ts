import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "ANP"})
export class ProtectedArea extends BaseEntity {
    
    @PrimaryGeneratedColumn({name: "ANP_ID"})
    id: number
    
    @Column({ nullable: false, name: "ANP_NAME" })
    name: string

    @Column({ nullable: false, name: "ANP_DESCRIPTION" })
    description: string

    @Column({ nullable: false, name: "ANP_PRICE", type: "decimal", precision: 10, scale: 2,})
    price: number

    @Column({ nullable: false, name: "ANP_IMAGE" })
    image: string

}