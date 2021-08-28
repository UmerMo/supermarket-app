import { Input } from "semantic-ui-react";
import { formatPrice } from "../utils/productsUtil";
import styled from "styled-components";

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
interface ProductsProps {
  name: string;
  price: number;
  image: string;
  perKg?: boolean;
}

const Product = (props: ProductsProps) => {
  return (
    <Container>
      <Image>
        <ProductImage>{props.image}</ProductImage>
      </Image>
      <ProductName>{props.name}</ProductName>
      <p>{formatPrice(props.price, props.perKg)}</p>

      {props.perKg ? (
        <Quantity
          label={{ basic: true, content: "kg" }}
          labelPosition="right"
          placeholder="Enter weight..."
        />
      ) : (
        <Quantity placeholder="Enter quantity..." />
      )}
    </Container>
  );
};

export default Product;
