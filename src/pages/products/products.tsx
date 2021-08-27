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

const Basket = styled.div`

`

const Item = styled.div``

interface BasketItem {
  image: string;
  name: string;
  price: number;
  quantity?: number;
  perKg?: boolean;
}

let productsDictionary = [
  { name: "Tin of beans", price: 0.5, image: "🥫" },
  { name: "Can of cola", price: 0.7, image: "🥤" },
  { name: "Oranges", price: 1.99, image: "🍊", perKg: true },
];

export default () => {
  const [basketItems, setBasket] = useState<Array<BasketItem>>([]);

  const addItemToBasket = (product: BasketItem) => {
    setBasket((prevState: BasketItem[]): BasketItem[] => {
      const isItemInCart = prevState.find((item) => item.name === product.name);

      if (isItemInCart) {
        return prevState.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity! + 1 }
            : item
        );
      }
      return [...prevState, { ...product, quantity: 1 }];
    });
  };

  return (
    <PageContainer>
      <h1>Products page</h1>
      <Products>
        {productsDictionary.map((product: BasketItem, i) => (
          <ProductContainer key={i}>
            <Product
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
              perKg={product.perKg}
            />
            <Button
              data-testid={`add-button-${i}`}
              key={`add-button-${i}`}
              basic
              color="blue"
              onClick={() => addItemToBasket(product)}
            >
              Add to basket
            </Button>
          </ProductContainer>
        ))}
      </Products>
      <Basket data-testid={'basket'}>
        <h3>Basket</h3>
        {basketItems.map((item) => (
          <Item>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
          </Item>
        ))}
      </Basket>
    </PageContainer>
  );
};
