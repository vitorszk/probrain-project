import { isPin } from "../../utils/index";
import { Numbers, NumbersContainer, Pin } from "./styled";

export const PinComponent = () => {
  const array = [...Array(1001).keys()].slice(1);
  return (
    <NumbersContainer data-testid="PinComponent">
      {array.map((number) =>
        isPin(number, 4) ? <Pin>PIN!</Pin> : <Numbers>{number}</Numbers>
      )}
    </NumbersContainer>
  );
};
