import { User } from "../entity/User";
import { BeanUtils } from "../utils/bean-utils";
import { PaymentBean } from "../dtos/PaymentBean";
import { Payment } from "../entity/Payment";
import { sendEmail } from "./notification.service";
import moment from 'moment'
export const createPayment = async(bean: PaymentBean) => {
    try {
        const model = new Payment();
        BeanUtils.copyProperties(bean, model);
        const user = await User.findOneBy({id: bean.userId})
        if(user) model.user = user;
        const res = await model.save();
        const email = user?.email ? user.email : "";
        await sendEmail(email, res.total, res.ticketQuantity,moment(new Date).format('MM/DD/YYYY'));
        return res;
        
    } catch(error) {
        if(error instanceof Error)
            throw error;
    }
}


