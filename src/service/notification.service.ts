import { generateTemplate } from "../templates/email.template"
import { Transporter } from "../utils/email-transporter"

export const sendEmail = async(email: string, price: any, quantity: any, emissionDate: any) => {
    const info = await Transporter.sendMail(
        {
            from: "ticketfast.roblitas@gmail.com",
            to: email,
            subject: "Compras de tickets han sido relizadas con exito",
            html: generateTemplate(price, quantity, emissionDate)
        }
    )
}