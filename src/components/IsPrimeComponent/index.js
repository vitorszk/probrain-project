import { isPrime } from "../../utils"
import { numberIsValid } from "../../validations";

export const IsPrimeComponent = ({number}) => {
    if (!numberIsValid(number)) return "";
    return <p>{isPrime(number) ? `${number} é um número primo!`: `${number} não é um número primo!`}</p>
}   