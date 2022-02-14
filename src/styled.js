import { Button, FormControl } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  font-family: "Press Start 2P", cursive;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 30vw;
  box-sizing: border-box;

  .MuiInputLabel-root {
    color: rgb(180, 180, 180);
  }

  .MuiInputLabel-root.Mui-focused,
  .MuiInputBase-root {
    color: white;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  .MuiOutlinedInput-notchedOutline,
  .MuiInputLabel-root {
    border-color: rgb(180, 180, 180);
  }

`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  align-self: center;
  color: red;
`;
