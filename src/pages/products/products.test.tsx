import { render, screen } from "@testing-library/react";
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
    expect(screen.getByText("50p each"));
    expect(screen.getByText("🥤"));
    expect(screen.getByText("Can of cola"));
    expect(screen.getByText("70p each"));
    expect(screen.getByText("🍊"));
    expect(screen.getByText("Oranges"));
    expect(screen.getByText("£1.99 per kg"));
  });
});
