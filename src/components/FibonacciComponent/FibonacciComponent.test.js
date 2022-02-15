import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FibonacciComponent } from ".";

describe("FibonacciComponent Component", () => {
  it("Should render the FibonacciComponent component correctly when the number is in the sequence", () => {
    render(<FibonacciComponent number={2} />);
    const textIsFibonacci = screen.getByTestId("FibonacciComponent");

    expect(textIsFibonacci).toContainHTML("2 está na Sequência de Fibonacci!");
  });

  it("Should render the FibonacciComponent component correctly when the number is not in the sequence", () => {
    render(<FibonacciComponent number={4} />);
    const textIsFibonacci = screen.getByTestId("FibonacciComponent");

    expect(textIsFibonacci).toContainHTML(
      "4 não está na Sequência de Fibonacci!"
    );
  });
});
