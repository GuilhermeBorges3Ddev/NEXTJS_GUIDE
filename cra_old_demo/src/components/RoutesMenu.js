import React from "react";
import { Link } from "react-router-dom";

export default function RoutesMenu({ availableRoutes }) {
  let links = [];
  if (availableRoutes.some((route) => route === "/"))
    links.push(<Link to="/">Home</Link>);
  if (availableRoutes.some((route) => route === "/register"))
    links.push(<Link to="/register">Register</Link>);
  if (availableRoutes.some((route) => route === "/ranking"))
    links.push(<Link to="/ranking">Top 5 Bands</Link>);
  if (availableRoutes.some((route) => route === "/nutrition"))
    links.push(<Link to="/nutrition">Nutritional Facts</Link>);
  return <div id="mainMenu">{links.map((link) => link)}</div>;
}
