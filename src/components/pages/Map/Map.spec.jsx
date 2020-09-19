import React from "react";
import { Map } from "./Map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({ remove: () => {} })),
}));

describe("Map", () => {
    it("renders correctly", () => {
        window.URL.createObjectURL = jest.fn();

        const { getByTestId } = render(<Map />);
        expect(mapbox.Map).toHaveBeenCalledWith({
            center: [30.3141, 59.9386],
            container: getByTestId('map'),
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 12,
        });
    });
});
