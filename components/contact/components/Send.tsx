import { useState } from "react";
import ImageSend from "./Image.send";

import ValidatorForm from "../controller/validateEmail";
import style from "./style/style.module.css";

import {
  InterfacePropSend,
  TypeStateImage,
} from "./models/interface.contact.components";

import sendFormServer from "../services/sendEmail";

const Send = ({ form, setForm }: InterfacePropSend): JSX.Element => {
  const { isBody, isEmail, isName } = ValidatorForm;

  const [image, setImage] = useState<TypeStateImage>("transparent");
  const [itWasSent, setItWasSent] = useState<boolean>(true);

  const isTheFormCorrect = isBody(form.body)
    ? false
    : isEmail(form.email)
    ? false
    : isName(form.name)
    ? false
    : true;

  // if (active && is the form correct) setActive(!active);

  const handleOnClick = async (form: InterfacePropSend["form"]) => {
    setImage("process");
    setItWasSent(false);
    const response = await sendFormServer(form);
    if (response === "success") {
      setTimeout(() => {
        setImage("success");
      }, 1000);
    }
    if (response === "fail") {
      setTimeout(() => {
        setImage("fail");
      }, 1000);
    }

    setTimeout(() => {
      setForm({ name: "", email: "", body: "" });
      setImage("transparent");
      setItWasSent(true);
    }, 5000);
  };

  return (
    <>
      {isTheFormCorrect && (
        <div className={style.container_submit}>
          {itWasSent && (
            <input
              type="button"
              value="Enviar!!"
              className={style.submit}
              onClick={() => {
                handleOnClick(form);
              }}
            />
          )}
          <ImageSend image={image} />
        </div>
      )}
    </>
  );
};

export default Send;
