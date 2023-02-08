import * as nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from "next";
import type { InterfaceForm } from "@components/contact/models";

import { emailHtmlAdmin } from "@components/contact/controller";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default async function SendEmailApiAdmin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const responseSentFromFrontend: InterfaceForm = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.API_KEY_EMAIL,
      },
    });

    const htmlForAdmin = emailHtmlAdmin(responseSentFromFrontend);

    const emailForAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Urgente mensaje enviado desde el Portfolio!!`,
      html: htmlForAdmin,
    };

    const promiseApiNodemailer = new Promise((resolve, reject) => {
      transporter.sendMail(emailForAdmin, (error, info) => {
        if (error) {
          reject(false);
        }
        resolve(info.response);
      });
    });

    const responseApiNodemailer = (await promiseApiNodemailer) as
      | string
      | false;

    return responseApiNodemailer
      ? res.status(200).send(responseApiNodemailer)
      : res.status(500).json(responseApiNodemailer);
  } catch (error) {
    return res.status(500).send(false);
  }
}
