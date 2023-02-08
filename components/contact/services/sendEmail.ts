import axios, { AxiosResponse } from "axios";

import { InterfaceForm } from "../models";

type typeSendFormServer = (form: InterfaceForm) => Promise<"fail" | "success">;

const sendFormServer: typeSendFormServer = async (form) => {
  try {
    const responseFromBackend: AxiosResponse = await axios({
      method: "post",
      url: "api/sendEmail",
      data: form,
    });
    return responseFromBackend.status === 200 ? "success" : "fail";
  } catch (error) {
    return "fail";
  }
};

export default sendFormServer;
