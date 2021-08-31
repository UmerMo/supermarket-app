import { useContext } from "react";
import styled from "styled-components";
import { SupermarketContext } from "../context/supermarketContext";
import { formatPrice, formatPricePerKg } from "../utils/productsUtil";

const BasketContainer = styled.div`
  padding: 20px;
  width: 300px;
  border: 1px dotted black;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Basket = () => {
  const { basketItems, getSubTotal, getTotalSavings, getTotalToPay } =
    useContext(SupermarketContext);
  return (
    <>
      <BasketContainer data-testid={"basket"}>
        <h1>Basket</h1>

        {basketItems.map((item, i) => (
          <Row key={i}>
            <p>{item.name}</p>
            <p>
              {item.perKg
                ? formatPricePerKg(item.price, item.weight!)
                : formatPrice(item.price)}
            </p>
          </Row>
        ))}
        <Row>
          <p>Sub-total</p>
          <p>{getSubTotal().toFixed(2)}</p>
        </Row>
        <Row>
          <p>Total savings</p>
          <p>- {getTotalSavings().toFixed(2)}</p>
        </Row>
        <Row>
          <p>Total to pay</p>
          <p>{getTotalToPay().toFixed(2)}</p>
        </Row>
      </BasketContainer>
    </>
  );
};
