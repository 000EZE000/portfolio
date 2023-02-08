import React, { ChangeEvent } from "react";
import style from "./style/style.module.css";
import { InterfacePropEmail } from "./models/interface.contact.components";
import Error from "./Error";

export default function Name({ setForm, form }: InterfacePropEmail) {
  type eventInput = ChangeEvent<HTMLInputElement>;

  const handleOnChange = ({ target: { value } }: eventInput) =>
    setForm({ ...form, name: value });

  return (
    <div className={style.content_input_email}>
      <input
        className={style.input_email}
        type="text"
        value={form.name}
        onChange={handleOnChange}
        placeholder="&nbsp;&nbsp;Nombre"
      />
      <Error
        form={form}
        input="name"
        validation="isName"
        message="Dos letras por lo menos"
      />
    </div>
  );
}
