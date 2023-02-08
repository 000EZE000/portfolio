import { ChangeEvent } from "react";

import style from "./style/style.module.css";

import { InterfacePropEmail } from "./models/interface.contact.components";

import Error from "./Error";

export default function Body({ setForm, form }: InterfacePropEmail) {
  type inputTextarea = ChangeEvent<HTMLTextAreaElement>;
  const handleOnChange = ({ target: { value } }: inputTextarea) =>
    setForm({ ...form, body: value });

  return (
    <div className={style.content_textarea}>
      <textarea
        className={style.input_textarea}
        value={form.body}
        onChange={handleOnChange}
        placeholder={" Contenido"}
      />
      <Error
        form={form}
        input="body"
        validation="isBody"
        message="3 palabras como minimo"
      />
    </div>
  );
}
