import axios, { AxiosResponse } from "axios";

import { InterfaceForm } from "../models";

type typeSendFormServer = (form: InterfaceForm) => Promise<"fail" | "success">;

const sendFormServer: typeSendFormServer = async (form) => {
  try {
    const responseFromBackendUser: AxiosResponse = await axios({
      method: "post",
      url: "api/sendEmailUser",
      data: form,
    });
    const responseFromBackendAdmin: AxiosResponse = await axios({
      method: "post",
      url: "api/sendEmailAdmin",
      data: form,
    });
    const { data } = responseFromBackendAdmin;
    const { data: dataUser } = responseFromBackendUser;

    console.log({ data, dataUser });

    return responseFromBackendUser.status === 200 ? "success" : "fail";
  } catch (error) {
    return "fail";
  }
};

export default sendFormServer;
