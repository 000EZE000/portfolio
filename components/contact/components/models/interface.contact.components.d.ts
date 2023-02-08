import { Dispatch, SetStateAction } from "react";
import { InterfaceForm } from "@components/contact/models";

export interface InterfacePropEmail {
  setForm: Dispatch<SetStateAction<InterfaceForm>>;
  form: InterfaceForm;
}

export interface InterfacePropError
  extends Omit<InterfacePropEmail, "setForm"> {
  message: string;
  validation: "isEmail" | "isBody" | "isName";
  input: "email" | "name" | "body";
}

export interface InterfacePropSend extends InterfacePropEmail {}

export type TypeStateImage = "success" | "process" | "transparent" | "fail";
