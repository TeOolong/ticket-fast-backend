import {DataSource} from 'typeorm'
import { User } from './entity/User'
import { Payment } from './entity/Payment'
import { Ticket } from './entity/Ticket'
import { ProtectedArea } from './entity/ProtectedArea'
import settings from './config/settings'
import { AutoEncryptSubscriber } from 'typeorm-encrypted'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: settings.DB.HOST,
    port: settings.DB.PORT,
    username: settings.DB.USERNAME,
    password: settings.DB.PASSWORD,
    database: settings.DB.DATABASE,
    synchronize: false,
    logging: true,
    entities: [User,Payment,Ticket,ProtectedArea],
    subscribers: [AutoEncryptSubscriber]
})