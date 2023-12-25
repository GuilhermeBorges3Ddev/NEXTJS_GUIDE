/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router-dom";
import RoutesMenu from "../components/RoutesMenu";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <RoutesMenu
        availableRoutes={["/", "/register", "/nutrition", "/ranking"]}
      />
      <div id="productsPage">Product found with ID: {id}</div>
    </div>
  );
}
