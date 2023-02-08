import * as nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from "next";
import type { InterfaceForm } from "@components/contact/models";

import { emailHtmlUser } from "@components/contact/controller";

export default async function SendEmailApiUser(
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

    const htmlFormUser = emailHtmlUser(responseSentFromFrontend);

    const emailForUser = {
      from: process.env.EMAIL_USER,
      to: responseSentFromFrontend.email,
      subject: `Para ${responseSentFromFrontend.name}`,
      html: htmlFormUser,
    };

    const promiseApiNodemailer = new Promise((resolve, reject) => {
      transporter.sendMail(emailForUser, (error, info) => {
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
