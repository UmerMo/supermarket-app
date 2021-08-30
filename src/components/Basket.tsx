import { useContext } from "react";
import styled from "styled-components";
import { SupermarketContext } from "../context/supermarketContext";
import { formatPrice } from "../utils/productsUtil";

const BasketContainer = styled.div`
padding: 20px;
  width: 300px;
  border: 1px dotted black;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Basket = () => {
  const { basketItems, getSubTotal, getTotalSavings } =
    useContext(SupermarketContext);
  return (
    <>
      <BasketContainer data-testid={"basket"}>
        <h1>Basket</h1>

        {basketItems.map((item, i) => (
          <Item key={i}>
            <p>{item.name}</p>
            <p>{formatPrice(item.price, item.perKg)}</p>
          </Item>
        ))}
        <p>Sub-total</p>
        <p>£{getSubTotal().toFixed(2)}</p>
        <p>Total Savings</p>
        <p>- £{getTotalSavings().toFixed(2)}</p>
      </BasketContainer>
    </>
  );
};
