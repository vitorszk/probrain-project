import { isEven } from "../../utils/index";
import { numberIsValid } from "../../validations";

export const IsEvencomponent = ({ number }) => {
  if (!numberIsValid(number)) return "";
  return <p>{isEven(number) ? `${number} é par!` : `${number} é ímpar!`}</p>;
};
