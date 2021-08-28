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

const ButtonContainer = styled.div`
  width: 300px;
  margin-top: 90px;
`;

const Basket = styled.div`
  width: 200px;
  border: 1px dotted black;
`;

const Item = styled.div`
  display: flex;
`;

interface BasketItem {
  image: string;
  name: string;
  price: number;
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
      return [...prevState, product];
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
            <ButtonContainer>
              <Button
                data-testid={`add-button-${i}`}
                key={`add-button-${i}`}
                basic
                color="blue"
                onClick={() => addItemToBasket(product)}
                size={"medium"}
              >
                Add to basket
              </Button>
            </ButtonContainer>
          </ProductContainer>
        ))}
      </Products>
      <h3>Basket</h3>
      <Basket data-testid={"basket"}>
        {basketItems.map((item, i) => {
          return (
            <Item key={i}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </Item>
          );
        })}
      </Basket>
    </PageContainer>
  );
};
