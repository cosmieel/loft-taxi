import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Login />);
        expect(getByTestId("Login")).toBeTruthy();
    });
});
