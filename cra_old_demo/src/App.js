import { useState, useEffect } from "react";
import FormSection from "./components/FormSection";
import NameReturner from "./components/NameReturner";
import ViewFormFields from "./components/ViewFormFields";
import TopFiveSection from "./components/TopFiveSection";

const USER_NAMES = {
  firstUser: "Norm guy",
  secondUser: "Freak guy",
};

function App() {
  const [user, setUser] = useState("Random man");
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState(0);
  const [formMail, setFormMail] = useState("");
  const [fullFormData, setFullFormData] = useState({});
  const [bandsInput, setBandsInput] = useState("");
  const [bandsVector, setBandsVector] = useState([]);
  const [showBandsActionButtons, setShowBandsActionButtons] = useState(false);

  useEffect(() => {
    let currentTopFive = JSON.parse(localStorage.getItem("@bands"));
    if (currentTopFive) setShowBandsActionButtons(true);
  }, []);

  useEffect(() => {
    if (bandsVector.length > 5) {
      let bandsToStorage = bandsVector.slice(0, 5);
      localStorage.setItem("@bands", JSON.stringify(bandsToStorage));
      window.location.reload();
    }
  }, [bandsVector]);

  function handleChangeName() {
    if (user === "Random man") setUser(USER_NAMES.firstUser);
    else setUser("Random man");
  }

  function handleRegister(e) {
    e.preventDefault();
    alert("User registered successfully");
    setFullFormData({
      formName,
      formAge,
      formMail,
    });
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
      <br />
      <FormSection
        handleRegister={handleRegister}
        formName={formName}
        setFormName={setFormName}
        formAge={formAge}
        setFormAge={setFormAge}
        formMail={formMail}
        setFormMail={setFormMail}
      />
      <ViewFormFields fullFormData={fullFormData} />
      <TopFiveSection
        bandsInput={bandsInput}
        setBandsInput={setBandsInput}
        bandsVector={bandsVector}
        setBandsVector={setBandsVector}
        showBandsActionButtons={showBandsActionButtons}
        setShowBandsActionButtons={setShowBandsActionButtons}
      />
    </div>
  );
}

export default App;
