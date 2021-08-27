import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import ProductsPage from "./products";

describe("Products page", () => {
  beforeEach(() => {
    render(<ProductsPage />);
  });
  it("renders products title", () => {
    expect(screen.getByText("Products page")).toBeInTheDocument();
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

  it("should display basket item when I click add to basket", () => {
    fireEvent.click(screen.getByTestId("add-button-1"));
    const { getByText } = within(screen.getByTestId("basket"));

    expect(getByText("Can of cola")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();

    // update quantity when added to basket twice
    fireEvent.click(screen.getByTestId("add-button-1"));

    expect(getByText("Can of cola")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});
