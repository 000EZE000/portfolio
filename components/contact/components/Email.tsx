import React, { ChangeEvent } from "react";
import style from "./style/style.module.css";
import { InterfacePropEmail } from "./models/interface.contact.components";
import Error from "./Error";

export default function Email({ setForm, form }: InterfacePropEmail) {
  type eventInput = ChangeEvent<HTMLInputElement>;

  const handleOnChange = ({ target: { value } }: eventInput) =>
    setForm({ ...form, email: value });

  return (
    <div className={style.content_input_email}>
      <input
        className={style.input_email}
        type="email"
        value={form.email}
        onChange={handleOnChange}
        placeholder="&nbsp;&nbsp;Email"
      />
      <Error
        form={form}
        input="email"
        validation="isEmail"
        message="El formato del Email es incorrecto"
      />
    </div>
  );
}
