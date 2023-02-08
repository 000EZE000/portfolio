import * as nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from "next";
import type { InterfaceForm } from "@components/contact/models";

import { emailHtmlUser, emailHtmlAdmin } from "@components/contact/controller";

export default async function SendEmailApi(
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

    let errorForSendEmail: true | false = false;

    const htmlForAdmin = emailHtmlAdmin(responseSentFromFrontend);

    const emailForAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Urgente mensaje enviado desde el Portfolio!!`,
      html: htmlForAdmin,
    };
    await transporter.sendMail(emailForAdmin, (error) => {
      if (error) {
        errorForSendEmail = true;
      }
    });

    const htmlFormUser = emailHtmlUser(responseSentFromFrontend);

    const emailForUser = {
      from: process.env.EMAIL_USER,
      to: responseSentFromFrontend.email,
      subject: `Para ${responseSentFromFrontend.name}`,
      html: htmlFormUser,
    };

    await transporter.sendMail(emailForUser, (error) => {
      if (error) {
        errorForSendEmail = true;
      }
    });

    return errorForSendEmail
      ? res.status(500).send(false)
      : res.status(200).send(true);
  } catch (error) {
    return res.status(500).send(false);
  }
}
