import styled from "styled-components";
import Product from "../../components/Product";
import { Button } from "semantic-ui-react";
import { useState } from "react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
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

interface BasketItem {
  name: string;
  quantity: number;
}

let productsDictionary = [
  { name: "Tin of beans", price: "50", unit: "each", image: "🥫" },
  { name: "Can of cola", price: "70", unit: "each", image: "🥤" },
  { name: "Oranges", price: "1.99", unit: "per kg", image: "🍊", poundSign: true },
];

export default () => {
  return (
    <PageContainer>
      <h1>Products page</h1>
      <Products>
        {productsDictionary.map((product, i) => (
          <ProductContainer key={i}>
            <Product
              key={i}
              name={product.name}
              price={product.price}
              unit={product.unit}
              image={product.image}
              poundSign={product.poundSign}
            />
            <Button basic color="blue" onClick={() => {}}>
              Add to basket
            </Button>
          </ProductContainer>
        ))}
      </Products>
    </PageContainer>
  );
};
