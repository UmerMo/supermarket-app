import { formatPrice, formatPricePerKg } from "./productsUtil";
describe("Product utils", () => {
  it("should return correct formatted price", () => {
    expect(formatPrice(12.99)).toEqual("£12.99");
    expect(formatPrice(0.99)).toEqual("0.99p");
  });

  it("should return correct formatted price for per kg", () => {
    expect(formatPricePerKg(1.95, 0.85)).toEqual("0.85 kg @ £1.95/kg 1.6575");
  });
});
