import React from "react";
import RoutesMenu from "../components/RoutesMenu";
import ChangeNameWrapper from "../components/ChangeNameWrapper";

export default function Home() {
  return (
    <div>
      <RoutesMenu availableRoutes={["/register", "/ranking", "/nutrition"]} />
      <div id="changeNameWrapper">
        <ChangeNameWrapper />
      </div>
    </div>
  );
}
