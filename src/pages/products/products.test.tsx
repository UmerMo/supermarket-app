import { fireEvent, render, screen, within } from "@testing-library/react";
import { SupermarketContextProvider } from "../../context/supermarketContext";
import ProductsPage from "./products";

describe("Products page", () => {
  beforeEach(() => {
    render(
      <SupermarketContextProvider>
        <ProductsPage />
      </SupermarketContextProvider>
    );
  });
  it("renders products title", () => {
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("should display the products and price", () => {
    expect(screen.getByText("🥫"));
    expect(screen.getByText("Tin of beans"));
    expect(screen.getByText("0.50p each"));
    expect(screen.getByText("🥤"));
    expect(screen.getByText("Can of cola"));
    expect(screen.getByText("0.70p each"));
    expect(screen.getByText("🍊"));
    expect(screen.getByText("Oranges"));
    expect(screen.getByText("£1.99 per kg"));
  });

  it("should display basket items when I click add to basket", () => {
    fireEvent.click(screen.getByTestId("add-button-2"));
    const { queryAllByText } = within(screen.getByTestId("basket"));

    expect(queryAllByText("Can of cola")).toHaveLength(1);

    // update quantity when added to basket twice
    fireEvent.click(screen.getByTestId("add-button-2"));

    expect(queryAllByText("Can of cola")).toHaveLength(2);
  });
});
