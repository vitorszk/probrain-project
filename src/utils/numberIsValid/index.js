export const numberIsValid = (num) => {
  if (!(num % 1 === 0)) return false;

  return num > 0 && num < 1001;
};
