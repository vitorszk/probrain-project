import { isEven } from "../../utils/index";
import { numberIsValid } from "../../utils/numberIsValid";

export const EvenComponent = ({ number }) => {
  if (!numberIsValid(number)) return "";
  return <p data-testid="EvenComponent">{isEven(number) ? `${number} é par!` : `${number} é ímpar!`}</p>;
};
