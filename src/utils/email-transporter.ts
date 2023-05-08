import nodemailer from "nodemailer";
import settings from "../config/settings";

export const Transporter = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: settings.NOTIFIER.EMAIL,
            pass: settings.NOTIFIER.PASSWORD
        }
    }
)

Transporter.verify().then(() => {
    console.log("Ready for notifications")
})