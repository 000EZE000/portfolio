interface InterfaceValidator {
  isEmail: (string: string) => boolean;
  isBody: (string: string) => boolean;
  isName: (string: string) => boolean;
}
const ValidatorForm: InterfaceValidator = {
  isEmail: (email) =>
    !(!email.includes("@")
      ? false
      : email.length < 4
      ? false
      : email.split("@")[1].length < 2
      ? false
      : true),
  isBody: (body) => body.length < 12,
  isName: (name) => name.length < 2,
};

export default ValidatorForm;
