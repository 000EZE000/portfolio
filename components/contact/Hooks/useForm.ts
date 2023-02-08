import { useState } from "react";
import { InterfaceForm } from "../models";
export default function useForm() {
  const initForm: InterfaceForm = {
    name: "",
    email: "",
    body: "",
  };
  const [form, setForm] = useState<InterfaceForm>(initForm);
  const [formValidation, setFormValidation] = useState<InterfaceForm>(initForm);
  return { form, setForm, formValidation, setFormValidation };
}
