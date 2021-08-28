import { formatPrice } from "./productsUtil";
describe("Product utils", () => {
  it("should return price with pound sign if price does not starts with 0", () => {
    expect(formatPrice(12.99)).toEqual("£12.99 each");
  });
  it("should return price with with pence if price does starts with 0", () => {
    expect(formatPrice(0.99)).toEqual("0.99p each");
  });
  it("should return price with with per kg if perkg is true", () => {
    expect(formatPrice(1.95, true)).toEqual("£1.95 per kg");
  });
  it("should return price with with each if perkg is false", () => {
    expect(formatPrice(1.95, false)).toEqual("£1.95 each");
  });
});
