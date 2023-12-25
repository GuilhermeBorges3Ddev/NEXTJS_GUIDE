import React from "react";
import RoutesMenu from "../components/RoutesMenu";
import TopFiveSection from "../components/TopFiveSection";

export default function Ranking() {
  return (
    <div>
      <RoutesMenu
        availableRoutes={["/", "/nutrition", "/register", `/products/`]}
      />
      <div className="formAndTop5">
        <TopFiveSection />
      </div>
    </div>
  );
}
