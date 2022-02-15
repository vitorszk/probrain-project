import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("EvenComponent Component", () => {
  /** TODO
   *  - SIMULAR USUARIO DIGITANDIO NUMEROS NO INPUT DE TEXTO
   *      - VERIFICAR SE APARECE MENSAGEM DE ERRO CASO INVALIDO
   *  - SIMULAR USUÁRIO SELECIONANDO UMA OPÇÃO
   *      - VERIFICAR SE PARA CADA OPÇAO PE RTENDERIZADO O CONTEUDO CORRETAMENTE
   *      - OBS: PARA SIMULAR O SELECT, PRIMEIRO É NECESSÁRIO SIMILAR UM CLUIQUE NO SELECT, E ENTAO BUSCAR A OPÇAO DESEJADA E DAÍ CLICAR NESSA OPÇAO
   *  - SIMULAR CLIQUE NO PIN (COLOCAR UM TE4STID NO COMPONENTE E VERIFICAR SE ESSE ID É ENCONTRADO APÓS O CLIQUE)
   */
  it("Should change input value when the user types", async () => {
    render(<App />);

    const select = screen.getByLabelText("Jogos");
    userEvent.click(select);

    const option = screen.getByText("Par ou ímpar?");
    userEvent.click(option);


    await waitFor(() => expect(screen.getByTestId('EvenComponent')).toContainHTML("1 é ímpar!"))
  });
});
