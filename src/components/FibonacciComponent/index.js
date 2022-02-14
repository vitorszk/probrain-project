import { isFibonacci } from "../../utils"
import { numberIsValid } from "../../utils/numberIsValid";


export const FibonacciComponent = ({number}) => {
    if (!numberIsValid(number)) return "";
    return <p data-testid="FibonacciComponent">{isFibonacci(number) ? `${number} está na Sequência de Fibonacci!`: `${number} não está na Sequência de Fibonacci!`}</p>
}