import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { EvenComponent } from ".";

describe("EvenComponent Component", () => {
  it("Should render the EvenComponent component correctly", () => {
    const view = render(<EvenComponent number={2} />);
    const textIsEven = screen.getByTestId("EvenComponent");

    expect(view).toMatchSnapshot();
    expect(textIsEven).toContainHTML("2 é par!");
  });
});
