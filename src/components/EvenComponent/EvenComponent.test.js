import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { EvenComponent } from ".";

describe("EvenComponent Component", () => {
  it("Should render the EvenComponent component correctly when the number is even", () => {
    render(<EvenComponent number={2} />);
    const textIsEven = screen.getByTestId("EvenComponent");

    expect(textIsEven).toContainHTML("2 é par!");
  });

  it("Should render the EvenComponent component correctly when the number is uneven", () => {
    render(<EvenComponent number={1} />);
    const textIsEven = screen.getByTestId("EvenComponent");

    expect(textIsEven).toContainHTML("1 é ímpar!");
  });
});
