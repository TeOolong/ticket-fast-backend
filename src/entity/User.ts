import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";

@Entity({name: "USER"})
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn({name: "USER_ID"})
    id: number
    
    @Column({ nullable: false, name: "USER_NAME" })
    name: string

    @Column({ nullable: false, name: "USER_LNAME" })
    lastName: string

    @Column({ nullable: false, name: "USER_EMAIL" })
    email: string

    @Column({ nullable: false, name: "USER_PASSWORD"})
    password: string

}