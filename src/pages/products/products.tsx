import styled from "styled-components";
import Product from "../../components/Product";
import { useContext } from "react";
import { Basket } from "../../components/Basket";
import {
  SupermarketContext,
  BasketItem,
} from "../../context/supermarketContext";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
`;

const Products = styled.div`
  padding: 20px;
  width: 400px;
  box-sizing: border-box;
`;

const ProductContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export default () => {
  const { getProducts } =
    useContext(SupermarketContext);

  return (
    <PageContainer>
      <Products>
        <h1>Products</h1>
        {getProducts().map((product: BasketItem, i) => (
          <ProductContainer key={i}>
            <Product product={product} />
          </ProductContainer>
        ))}
      </Products>
      <Basket />
    </PageContainer>
  );
};
