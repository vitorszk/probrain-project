import { isPin } from "../../utils/index";
import { Numbers, NumbersContainer, Pin } from "./styled";

export const IsPinComponent = () => {
  const array = [...Array(1001).keys()].slice(1);
  return (
    <NumbersContainer>
      {array.map((number) =>
        isPin(number, 4) ? <Pin>PIN!</Pin> : <Numbers>{number}</Numbers>
      )}
    </NumbersContainer>
  );
};
