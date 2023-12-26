import React from "react";
import RoutesMenu from "../components/RoutesMenu";
import GenericWrapper from "../components/GenericWrapper";
import TopFiveSection from "../components/TopFiveSection";

export default function Ranking() {
  return (
    <div>
      <RoutesMenu
        availableRoutes={["/", "/nutrition", "/register", `/products/`]}
      />
      <GenericWrapper>
        <TopFiveSection />
      </GenericWrapper>
    </div>
  );
}
