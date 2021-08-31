import { Input } from "semantic-ui-react";
import { formatPrice } from "../utils/productsUtil";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { BasketItem, SupermarketContext } from "../context/supermarketContext";
import { useContext, useState } from "react";

const ProductImage = styled.div`
  font-size: 30px;
`;

const Image = styled.div`
  padding: 10px;
  text-align: center;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-right: 5px;
`;

const Quantity = styled(Input)`
  width: 120px;
`;

const Container = styled.div`
  width: 400px;
`;

const ButtonContainer = styled.div`
  width: 300px;
  margin-top: 90px;
`;
interface ProductsProps {
  product: BasketItem;
}

const Product = (props: ProductsProps) => {
  const { id, name, price, image, perKg } = props.product;

  const { addItemsToBasket } = useContext(SupermarketContext);
  const [amountInKg, setAmountInKg] = useState(0);

  return (
    <>
      <Container>
        <Image>
          <ProductImage>{image}</ProductImage>
        </Image>
        <ProductName>{name}</ProductName>
        <p>{perKg ? `${formatPrice(price)} per kg` : `${formatPrice(price)} each`}</p>

        {perKg ? (
          <Quantity
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setAmountInKg(parseInt(e.currentTarget.value))
            }
            label={{ basic: true, content: "kg" }}
            labelPosition="right"
            placeholder="Enter weight..."
          />
        ) : null}
      </Container>
      <ButtonContainer>
        <Button
          data-testid={`add-button-${id}`}
          key={`add-button-${id}`}
          basic
          color="blue"
          onClick={() => addItemsToBasket(props.product, amountInKg)}
          size={"medium"}
        >
          Add to basket
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Product;
