import styled from "styled-components";
import Product from "../../components/Product";
import { Button } from "semantic-ui-react";
import { useContext } from "react";
import { Basket } from "../../components/Basket";
import {
  SupermarketContext,
  BasketItem,
} from "../../context/supermarketContext";

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

export default () => {
  const { getProducts, addItemsToBasket, basketItems } =
    useContext(SupermarketContext);

  return (
    <PageContainer>
      <h1>Products page</h1>
      <Products>
        {getProducts().map((product: BasketItem, i) => (
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
                data-testid={`add-button-${product.id}`}
                key={`add-button-${product.id}`}
                basic
                color="blue"
                onClick={() => addItemsToBasket(product)}
                size={"medium"}
              >
                Add to basket
              </Button>
            </ButtonContainer>
          </ProductContainer>
        ))}
      </Products>
      <Basket />
    </PageContainer>
  );
};
