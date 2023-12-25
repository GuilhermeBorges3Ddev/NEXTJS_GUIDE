import React from "react";
import RoutesMenu from "../components/RoutesMenu";

export default function NotFound() {
  return (
    <div id="notFoundArea">
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
    </div>
  );
}
