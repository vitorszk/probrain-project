import { isFibonacci } from "../../utils";

export const FibonacciComponent = ({ number }) => {
  return (
    <p data-testid="FibonacciComponent">
      {isFibonacci(number)
        ? `${number} está na Sequência de Fibonacci!`
        : `${number} não está na Sequência de Fibonacci!`}
    </p>
  );
};
