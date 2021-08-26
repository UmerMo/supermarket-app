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
  price: string;
  image: string;
  unit: string;
  poundSign?: boolean;
}

const Product = (props: ProductsProps) => {
  return (
    <>
      <ImageBorder>
        <ProductImage>{props.image}</ProductImage>
      </ImageBorder>
      <ProductName>{props.name}</ProductName>
      <p>
        {props.poundSign
          ? `£${props.price} ${props.unit}`
          : `${props.price}p ${props.unit}`}
      </p>
    </>
  );
};

export default Product;
