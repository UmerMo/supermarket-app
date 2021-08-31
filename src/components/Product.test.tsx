import { render, screen } from "@testing-library/react";
import { BasketItem } from "../context/supermarketContext";
import products from "../pages/products/products";
import Product from "./Product";

const Products: BasketItem[] = [
  {
    id: 1,
    name: "Grapes",
    image: "🍇",
    price: 2.5,
    perKg: true,
    weight: 0,
  },
  {
    id: 2,
    name: "Pizza",
    image: "🍕",
    price: 0.75,
  },
];

describe("Product component", () => {
  it("should correctly render all the fields", () => {
    render(<Product product={Products[0]} />);
    render(<Product product={Products[1]} />);
    expect(screen.getByText("🍇"));
    expect(screen.getByText("Grapes"));
    expect(screen.getByText("£2.50 per kg"));
    expect(screen.getByText("🍕"));
    expect(screen.getByText("Pizza"));
    expect(screen.getByText("0.75p each"));
  });
});
