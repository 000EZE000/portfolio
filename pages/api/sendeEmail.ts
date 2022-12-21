import * as nodemailer from 'nodemailer'
import { htmlConfirm, emailHtmlAdmin, htmlConfirmFeedback } from '@components/contact/controller'
import type { NextApiRequest, NextApiResponse } from 'next'
import { status } from '@components/contact/models'
export default function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const myRequest: status = req.body
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.API_KEY_EMAIL
      }
    });
    const emailAdmin = emailHtmlAdmin(myRequest)
    const forMe = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Urgente mensaje enviado desde el Portfolio!!`,
      html: emailAdmin
    }
    transporter.sendMail(forMe, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ msg: info.response })
      }
    });

    if (myRequest.confirm && myRequest.feedBack) {
      const email = htmlConfirmFeedback()
      const forHerOrHis = {
        from: process.env.EMAIL_USER,
        to: myRequest.email,
        subject: `Para ${myRequest.email}`,
        html: email
      }

      transporter.sendMail(forHerOrHis, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json({ msg: info.response })
        }
      });
      return
    }

    if (myRequest.confirm) {
      const emailVisit = htmlConfirm()
      const forHerOrHis = {
        from: process.env.EMAIL_USER,
        to: myRequest.email,
        subject: `Para ${myRequest.email}`,
        html: emailVisit
      }
      transporter.sendMail(forHerOrHis, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json({ msg: info.response })
        }
      });
      return
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: 'no se pudo enviar el email' })

  }
}
