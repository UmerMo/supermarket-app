import React from "react";
import styled from "styled-components";
import Product from "../../components/Product";
import { Button, Icon } from "semantic-ui-react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const Products = styled.div`
  padding: 20px;
  width: 400px;
  box-sizing: border-box;
  border: 1px solid;
`;

export default () => {
  return (
    <PageContainer>
      <h1>Products page</h1>
      <Products>
        <Product
          name={"Tin of beans"}
          price={"50"}
          unit={"each"}
          image={"🥫"}
        />
        <Product name={"Can of cola"} price={"70"} unit={"each"} image={"🥤"} />
        <Product
          name={"Oranges"}
          price={"1.99"}
          unit={"per kg"}
          image={"🍊"}
          poundSign={true}
        />
      </Products>
    </PageContainer>
  );
};
