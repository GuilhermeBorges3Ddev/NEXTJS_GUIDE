import React from "react";
import styled from "styled-components";
import RoutesMenu from "../components/RoutesMenu";
import ChangeNameWrapper from "../components/ChangeNameWrapper";

const ChangeNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
  section {
    text-align: center;
    width: 700px;
  }
`;

export default function Home() {
  return (
    <div>
      <RoutesMenu
        availableRoutes={["/register", "/ranking", "/nutrition", `/products/`]}
      />
      <ChangeNameDiv>
        <ChangeNameWrapper />
      </ChangeNameDiv>
    </div>
  );
}
