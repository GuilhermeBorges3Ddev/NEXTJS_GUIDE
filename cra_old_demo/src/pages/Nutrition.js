import React from "react";
import RoutesMenu from "../components/RoutesMenu";
import NutritionalFacts from "../components/NutritionalFacts";

export default function Nutrition() {
  return (
    <div>
      <RoutesMenu availableRoutes={["/", "/ranking", "/register"]} />
      <NutritionalFacts />
    </div>
  );
}
