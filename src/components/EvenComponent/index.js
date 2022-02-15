import { isEven } from "../../utils/index";

export const EvenComponent = ({ number }) => {

  return (
    <p data-testid="EvenComponent">
      {isEven(number) ? `${number} é par!` : `${number} é ímpar!`}
    </p>
  );
};
