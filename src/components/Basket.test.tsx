import { render, screen } from "@testing-library/react";
import { SupermarketContext, BasketItem } from "../context/supermarketContext";
import { Basket } from "./Basket";
describe("Products page", () => {
  const basketItems: BasketItem[] = [
    { id: 4, name: "Pizza", price: 0.9, image: "🍕" },
    { id: 5, name: "Burrito", price: 3.45, image: "🌯" },
  ];
  beforeEach(() => {
    render(
      <SupermarketContext.Provider
        value={{
          basketItems: basketItems,
          addItemsToBasket: () => {},
          getProducts: () => basketItems,
          getSubTotal: () => 4.35
        }}
      >
        <Basket />
      </SupermarketContext.Provider>
    );
  });
  it("renders Basket title", () => {
    expect(screen.getByText("Basket")).toBeInTheDocument();
  });

  it("should display basketItems", () => {
    expect(screen.getByText("Pizza"));
    expect(screen.getByText("0.90p each"));
    expect(screen.getByText("Burrito"));
    expect(screen.getByText("£3.45 each"));
  });

  it("Should display subtotal", () => {
    expect(screen.getByText("Sub-total"));
    expect(screen.getByText("£4.35"));
  })
});
