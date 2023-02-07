import { Dispatch, SetStateAction } from "react";
import { InterfaceForm } from "@components/contact/models";

export interface InterfacePropEmail {
  setForm: Dispatch<SetStateAction<InterfaceForm>>;
  form: InterfaceForm;
}

export type typePropError = Omit<InterfacePropEmail, "setForm">;
