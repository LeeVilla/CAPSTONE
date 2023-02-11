// Renders ListItem component with the given coin prop.
// Checks if all the elements in the component are rendered.

import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

describe("ListItem component", () => {
  it("renders the component with the given props", () => {
    const coin = {
      id: "bitcoin",
      image: "https://example.com/image.png",
      name: "Bitcoin",
      priceBtc: "10",
      priceUsd: "100000",
    };

    render(<ListItem coin={coin} />);

    const link = screen.getByRole("link");
    expect(link.getAttribute("to")).toBe("/bitcoin");

    const image = screen.getByAltText("Bitcoin");
    expect(image.getAttribute("src")).toBe("https://example.com/image.png");

    const name = screen.getByText("Bitcoin");
    expect(name).toBeInTheDocument();

    const prices = screen.getByText("$100000 USD");
    expect(prices).toBeInTheDocument();

    const btc = screen.getByText("(10) BTC");
    expect(btc).toBeInTheDocument();
  });
});
