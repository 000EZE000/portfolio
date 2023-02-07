import { InterfaceForm } from "../models";
import React, { Dispatch, ChangeEvent, SetStateAction } from "react";
import ValidatorForm from "../controller/validateEmail";
import style from "./style/style.module.css";

interface InterfacePropEmail {
  setForm: Dispatch<SetStateAction<InterfaceForm>>;
  form: InterfaceForm;
}

type typePropError = Omit<InterfacePropEmail, "setForm">;

const Error = ({ form }: typePropError) => {
  const { isEmail } = ValidatorForm;
  return (
    <>
      {isEmail(form.email) && (
        <p className={style.error_email}>Formato de Email incorrecto</p>
      )}
    </>
  );
};

export default function Email({ setForm, form }: InterfacePropEmail) {
  type eventInput = ChangeEvent<HTMLInputElement>;

  const handleOnChange = ({ target: { value } }: eventInput) =>
    setForm({ ...form, email: value });

  return (
    <div className={style.content_input_email}>
      <input
        className={style.input_email}
        type="text"
        value={form.email}
        onChange={handleOnChange}
        placeholder="&nbsp;&nbsp;Email"
      />
      <Error form={form} />
    </div>
  );
}
