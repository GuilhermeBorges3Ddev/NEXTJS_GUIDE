/* eslint-disable eqeqeq */
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RoutesMenu from "../components/RoutesMenu";

const ProductsPage = styled.div`
  display: flex;
  font-size: larger;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 80vh;
  width: 100%;
`;

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <RoutesMenu
        availableRoutes={["/", "/register", "/nutrition", "/ranking"]}
      />
      <ProductsPage>Product found with ID: {id}</ProductsPage>
    </div>
  );
}
