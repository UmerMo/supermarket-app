import { render, screen } from "@testing-library/react";
import Product from "./product";

describe("Product component", () => {
  it("should correctly render all the fields", () => {
    render(<Product name={"Grapes"} image={"🍇"} price={"2.50"} unit={"per bunch"} poundSign={true}/>);
    render(<Product name={"Pizza"} image={"🍕"} price={"0.75"} unit={"per slice"}/>);
    expect(screen.getByText("🍇"));
    expect(screen.getByText("Grapes"));
    expect(screen.getByText("£2.50 per bunch"));
    expect(screen.getByText("🍕"));
    expect(screen.getByText("Pizza"));
    expect(screen.getByText("0.75p per slice"));
  });
});
