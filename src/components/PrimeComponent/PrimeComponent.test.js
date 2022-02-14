import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PrimeComponent } from ".";

describe("PrimeComponent Component", () => {
  it("Should render the PrimeComponent component correctly", () => {
    const view = render(<PrimeComponent number={2} />);
    const textIsPrime = screen.getByTestId("PrimeComponent");

    expect(view).toMatchSnapshot();
    expect(textIsPrime).toContainHTML("2 é um número primo!");
  });
});
