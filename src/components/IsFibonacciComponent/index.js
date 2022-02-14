import { isFibonacci } from "../../utils"
import { numberIsValid } from "../../validations";


export const IsFibonacciComponent = ({number}) => {
    if (!numberIsValid(number)) return "";
    return <p>{isFibonacci(number) ? `${number} está na Sequência de Fibonacci!`: `${number} não está na Sequência de Fibonacci!`}</p>
}