import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainMenu = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: space-evenly;
  flex-direction: row;
  flex-flow: nowrap;
  width: 100vw;
  gap: 10%;
`;

export default function RoutesMenu({ availableRoutes }) {
  let links = [];
  let productId = Math.floor(Math.random() * (1000000000 - 2 + 1)) + 2;
  if (availableRoutes.some((route) => route === "/"))
    links.push(<Link to="/">Home</Link>);
  if (availableRoutes.some((route) => route === "/register"))
    links.push(<Link to="/register">Register</Link>);
  if (availableRoutes.some((route) => route === "/ranking"))
    links.push(<Link to="/ranking">Top 5 Bands</Link>);
  if (availableRoutes.some((route) => route === "/nutrition"))
    links.push(<Link to="/nutrition">Nutritional Facts</Link>);
  if (availableRoutes.some((route) => route.includes("/products/")))
    links.push(<Link to={`/products/${productId}`}>Product </Link>);
  return <MainMenu>{links.map((link) => link)}</MainMenu>;
}
