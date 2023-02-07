export const email = (string: string = "") =>
  /([a-z0-9]{2,15})[@]([a-z0-9]{1,5})+[.][a-z]*/gi.test(string);

export const body = (string: string = "") => {
  return /(^[a-z0-9!-@]{1,23})+\s([a-z0-9]+).+/gi.test(string);
};

export const name = (string: string = "") => {
  return /(^[a-z0-9!-@]{1,15})+\s([a-z0-9]+).+/gi.test(string);
};
