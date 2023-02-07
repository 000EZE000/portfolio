const regExpEmail = /([a-z0-9]{2,15})[@]([a-z0-9]{1,5})+[.][a-z]*/gi;
const regExpName = /(^[a-z0-9!-@]{1,23})+\s([a-z0-9]+).+/gi;
const regExpBody = /(^[a-z0-9!-@]{1,15})+\s([a-z0-9]+).+/gi;
interface InterfaceValidator {
  isEmail: (string: string) => boolean;
  isBody: (string: string) => boolean;
  isName: (string: string) => boolean;
}
const ValidatorEmail: InterfaceValidator = {
  isEmail: (email) => regExpEmail.test(email),
  isBody: (body) => regExpBody.test(body),
  isName: (name) => regExpName.test(name),
};

export default ValidatorEmail;
