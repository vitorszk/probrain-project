import React from 'react';
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { PinComponent } from ".";

describe("PinComponent Component", () => {
    it('Should render the PinComponent component correctly', () => {
        const view = render(<PinComponent />)

        expect(view).toMatchSnapshot()
    })
})
