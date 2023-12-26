import React, { useState } from "react";
import styled from "styled-components";
import NameReturner from "./NameReturner";

const USER_NAMES = {
  firstUser: "Norm guy",
  secondUser: "Freak guy",
};

const ChangeNameBtn = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

export default function ChangeNameWrapper() {
  const [user, setUser] = useState("Random man");
  function handleChangeName() {
    if (user === "Random man") setUser(USER_NAMES.firstUser);
    else setUser("Random man");
  }
  return (
    <section>
      <h1>Hello to my demo project!</h1>
      <br />
      <NameReturner name={user} role={"developer"} />
      <NameReturner name={USER_NAMES.secondUser} role={"admin"} />
      <br />
      <ChangeNameBtn onClick={handleChangeName}>
        Change first user name
      </ChangeNameBtn>
      <br />
    </section>
  );
}
