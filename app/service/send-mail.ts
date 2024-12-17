"use server";
import { Resend } from "resend";

const sendEmail = async (emailFrom: string, message: string, name: string, company: string, phone: string) => {
    const resend = new Resend(process.env.resendKey);

    return await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'lucasrgs17@gmail.com',
        subject: 'Contato via landing page',
        html: `
            <strong> E-mail: </strong> <p> ${emailFrom} <p>
            <strong> Nome: </strong> <p> ${name} <p>
            <strong> Empresa: </strong> <p> ${company} <p>
            <strong> Telefone: </strong> <p> ${phone} <p>
            <strong> Mensagem: </strong> <br> <p> ${message} <p>
        `
    });
}

export default sendEmail;