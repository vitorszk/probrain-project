import { isPrime } from "../../utils"
import { numberIsValid } from "../../utils/numberIsValid";

export const PrimeComponent = ({number}) => {
    if (!numberIsValid(number)) return "";
    return <p data-testid="PrimeComponent">{isPrime(number) ? `${number} é um número primo!`: `${number} não é um número primo!`}</p>
}   