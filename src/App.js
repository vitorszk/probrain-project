import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { Container, StyledButton, StyledFormControl } from "./styled";
import {
  EvenComponent,
  PinComponent,
  PrimeComponent,
  FibonacciComponent,
} from "./components";
import { numberIsValid } from "./utils/numberIsValid";
import Snackbar from "@mui/material/Snackbar";

const App = () => {
  const [game, setGame] = React.useState(2);
  const [number, setNumber] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGame(event.target.value);
    setOpen(!numberIsValid(number));
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
    setOpen(!numberIsValid(event.target.value));
  };

  const renderComponents = {
    1: <EvenComponent number={number} />,
    2: <PrimeComponent number={number} />,
    3: <FibonacciComponent number={number} />,
    4: <PinComponent />,
  }[game];

  return (
    <Container>
      <h2>Escolha um número e um dos jogos</h2>
      <StyledFormControl>
        <TextField
          id="outlined-number"
          label="Número"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 1000 } }}
          error={!numberIsValid(number)}
          data-testid="textField"
          helperText={
            numberIsValid(number) ? "" : "Escolha um número de 1 a 1000"
          }
          onChange={handleChangeNumber}
          margin="normal"
          placeholder="Insira um número"
          defaultValue={1}
        />
      </StyledFormControl>
      <StyledFormControl margin="normal">
        <InputLabel id="select-label">Jogos</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select-autowidth"
          value={game}
          onChange={handleChange}
          width="large"
          label="Jogos"
          disabled={!number}
          defaultValue={2}
        >
          <MenuItem selected={true} disabled value={undefined}>
            <em>Selecione um jogo</em>
          </MenuItem>
          <MenuItem value={1}>Par ou ímpar?</MenuItem>
          <MenuItem value={2}>É primo?</MenuItem>
          <MenuItem value={3}>Tá na Sequência de Fibonacci?</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledButton
        variant="contained"
        color="error"
        onClick={() => setGame(4)}
      >
        PIN!
      </StyledButton>
      {numberIsValid(number) && (renderComponents || <></>)}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          Insira um número de 1 a 1000!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
