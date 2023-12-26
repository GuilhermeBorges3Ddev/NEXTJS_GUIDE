import React from "react";
import styled from "styled-components";
import RoutesMenu from "../components/RoutesMenu";

const NotFoundArea = styled.div`
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: blueviolet;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
  h1,
  h2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
    height: 70px;
    width: 100%;
  }
  h1 {
    position: relative;
    top: 5%;
  }
  a {
    color: #fff;
    font: bolder;
  }
`;

export default function NotFound() {
  return (
    <NotFoundArea>
      <RoutesMenu
        availableRoutes={[
          "/",
          "/register",
          "/nutrition",
          "/ranking",
          `/products/`,
        ]}
      />
      <h1>Ooops... you're trying to navigate into a not found page!</h1>
      <br />
      <h2>Use the navigate menu to go between existing pages.</h2>
    </NotFoundArea>
  );
}
