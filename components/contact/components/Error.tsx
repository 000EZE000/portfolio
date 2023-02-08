import { InterfacePropError } from "./models/interface.contact.components";

import ValidatorForm from "../controller/validateEmail";

import style from "./style/style.module.css";

const Error = ({ form, message, validation, input }: InterfacePropError) => {
  const validationMethod = ValidatorForm[validation];
  return (
    <>
      {validationMethod(form[input]) && form[input] && (
        <p className={style.error_email}>{message}</p>
      )}
    </>
  );
};

export default Error;
