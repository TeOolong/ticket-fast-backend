export default {
    PORT: Number(process.env.PORT) || 9080,
    SECRET: process.env.JWT_SECRET || 'ticketfasttoken',
    DB: {
        HOST: process.env.HOST || 'localhost',
        PORT: Number(process.env.PORT) || 43307,
        USERNAME: 'root',
        PASSWORD: process.env.PASSWORD || 'root',
        DATABASE: process.env.DATABASE || 'TICKET_FAST',
    },
    NOTIFIER: {
        EMAIL: "ticketfast.roblitas@gmail.com",
        PASSWORD: "axiqqcoupsypmbbu"
    }

}