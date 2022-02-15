import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PrimeComponent } from ".";

describe("PrimeComponent Component", () => {
  it("Should render the PrimeComponent component correctly when the number is prime", () => {
    render(<PrimeComponent number={2} />);
    const textIsPrime = screen.getByTestId("PrimeComponent");

    expect(textIsPrime).toContainHTML("2 é um número primo!");
  });

  it("Should render the PrimeComponent component correctly when the number is not prime", () => {
    render(<PrimeComponent number={4} />);
    const textIsPrime = screen.getByTestId("PrimeComponent");

    expect(textIsPrime).toContainHTML("4 não é um número primo!");
  });
});
