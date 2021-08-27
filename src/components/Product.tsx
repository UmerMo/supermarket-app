import { privateDecrypt } from "crypto";
import styled from "styled-components";

const ProductImage = styled.div`
  font-size: 30px;
`;

const ImageBorder = styled.div`
  padding: 10px;
  width: 100px;
  text-align: center;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-right: 5px;
`;
interface ProductsProps {
  name: string;
  price: number;
  image: string;
  perKg?: boolean;
}

const Product = (props: ProductsProps) => {
  const formattedPrice = () => {
    let priceStringBuilder = "";
    if (props.price.toString().startsWith("0")) {
      priceStringBuilder = `${props.price.toFixed(2)}p`;
    } else {
      priceStringBuilder = `£${props.price.toFixed(2)}`;
    }

    console.log(priceStringBuilder)

    return props.perKg
      ? `${priceStringBuilder} per kg`
      : `${priceStringBuilder} each`;
  };
  return (
    <>
      <ImageBorder>
        <ProductImage>{props.image}</ProductImage>
      </ImageBorder>
      <ProductName>{props.name}</ProductName>
      <p>{formattedPrice()}</p>
    </>
  );
};

export default Product;
