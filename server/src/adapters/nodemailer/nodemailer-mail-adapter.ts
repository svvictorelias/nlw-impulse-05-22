import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c4a8590a7e797b",
    pass: "cbbf18212ec90d"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Victor Elias <svvictorelias@gmail.com>',
      subject,
      html: body 
    })
  }
}