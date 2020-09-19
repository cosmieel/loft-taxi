import React from "react";
import { Signup } from "./Signup";
import { render } from "@testing-library/react";

describe("Signup", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Signup />);
        expect(getByTestId("Signup")).toBeTruthy();
    });
});
