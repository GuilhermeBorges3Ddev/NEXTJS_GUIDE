import { useState } from "react";
import NameReturner from "./components/NameReturner";

const USER_NAMES = {
  firstUser: "Norm guy",
  secondUser: "Freak guy",
};

function App() {
  const [user, setUser] = useState("Random man");
  function handleChangeName() {
    if (user === "Random man") setUser(USER_NAMES.firstUser);
    else setUser("Random man");
  }
  return (
    <div>
      <h1>Hello to my demo project!</h1>
      <br />
      <NameReturner name={user} role={"developer"} />
      <NameReturner name={USER_NAMES.secondUser} role={"admin"} />
      <br />
      <button style={{ cursor: "pointer" }} onClick={handleChangeName}>
        Change first user name
      </button>
    </div>
  );
}

export default App;
