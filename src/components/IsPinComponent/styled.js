import styled from "styled-components";

export const NumbersContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 90vw;
  flex-wrap: wrap;
  height: 45vh;
  overflow: auto;
  align-items: center;
  justify-content: flex-start;

  p {
    width: 50px;
    height: 50px;
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 12px 0px #000000ad;
  }
`;

export const Pin = styled.p`
  margin: 20px;
  color: red;
  fontweight: bold;
`;

export const Numbers = styled.p`
  margin: 5px;
`;
