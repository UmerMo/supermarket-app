import { useContext } from "react";
import styled from "styled-components";
import { SupermarketContext } from "../context/supermarketContext";
import { formatPrice } from '../utils/productsUtil';

const BasketContainer = styled.div`
  width: 200px;
  border: 1px dotted black;
`;

const Item = styled.div`
  display: flex;
`;
export const Basket = () => {
  const { basketItems } = useContext(SupermarketContext);
  return (
    <>
      <h3>Basket</h3>
      <BasketContainer data-testid={"basket"}>
        {basketItems.map((item, i) => (
          <Item key={i}>
            <p>{item.name}</p>
            <p>{formatPrice(item.price, item.perKg)}</p>
          </Item>
        ))}
      </BasketContainer>
    </>
  );
};
