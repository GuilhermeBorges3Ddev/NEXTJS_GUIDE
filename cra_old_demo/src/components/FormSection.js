import { useState } from "react";

export default function FormSection() {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState(0);
  const [formMail, setFormMail] = useState("");
  const [fullFormData, setFullFormData] = useState({});

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
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      <h1 style={{ margin: "20 0 0 10" }}>
        First login? Register your infos first...
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <form style={{ margin: 20 }} onSubmit={handleRegister}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            minLength={1}
            placeholder="Type your name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <br />
          <label>Years:</label>
          <br />
          <input
            type="number"
            min={0}
            placeholder="Type your age"
            value={formAge}
            onChange={(e) => setFormAge(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="mail"
            placeholder="Type your most used email"
            value={formMail}
            onChange={(e) => setFormMail(e.target.value)}
          />
          <br />
          <button
            style={{
              cursor: "pointer",
              display: "block",
              marginTop: 10,
              flexWrap: "nowrap",
            }}
            type="submit"
          >
            Register formulary
          </button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          border: "1px dashed red",
          width: "300px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          marginTop: "1rem",
        }}
      >
        <div style={{ width: "100%" }}>Form name: {fullFormData.formName}</div>
        <br />
        <div style={{ width: "100%" }}>
          Form age: {fullFormData.formAge ? fullFormData.formAge : ""}
        </div>
        <br />
        <div style={{ width: "100%" }}>Form mail: {fullFormData.formMail}</div>
        <br />
      </div>
    </section>
  );
}
