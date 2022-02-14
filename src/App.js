import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


import {
  Container,
  StyledButton,
  StyledFormControl,
} from "./styled";
import {
  IsEvencomponent,
  IsPinComponent,
  IsPrimeComponent,
  IsFibonacciComponent,
} from "./components";
import { numberIsValid } from "./validations";
import Snackbar from '@mui/material/Snackbar';

const App = () => {
  const [game, setGame] = React.useState();
  const [number, setNumber] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGame(event.target.value);
    setOpen(!numberIsValid(number))
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
    setOpen(!numberIsValid(event.target.value))
  };

  const renderComponents = {
    1: <IsEvencomponent number={number} />,
    2: <IsPrimeComponent number={number} />,
    3: <IsFibonacciComponent number={number} />,
    4: <IsPinComponent />,
  }[game];

  return (
    <Container>
      <h1>Escolha um número e um dos jogos</h1>
      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert severity="error">
        <AlertTitle>Erro</AlertTitle>
        Insira um número de 1 a 1000!
      </Alert>
      </Snackbar>
      <StyledFormControl>
        <TextField
          id="outlined-number"
          label="Número"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 1000 } }}
          error={!numberIsValid(number)}
          helperText={numberIsValid(number) ? "" : "Escolha um número de 1 a 1000"}
          onChange={handleChangeNumber}
          margin="normal"
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
        >
          <MenuItem selected={true} disabled value="Games">
            <em>Selecione um jogo</em>
          </MenuItem>
          <MenuItem value={1}>Par ou ímpar?</MenuItem>
          <MenuItem value={2}>É primo?</MenuItem>
          <MenuItem value={3}>Tá na Sequência de Fibonacci?</MenuItem>
        </Select>
      </StyledFormControl>
        <StyledButton variant="contained" color="error" onClick={() => setGame(4)}>
          PIN!
        </StyledButton>
      {renderComponents}
    </Container>
  );
};

export default App;
