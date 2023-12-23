import React from "react";

export default function FormSection({
  handleRegister,
  formName,
  setFormName,
  formAge,
  setFormAge,
  formMail,
  setFormMail,
}) {
  return (
    <React.Fragment>
      <h1 style={{ margin: "20 0 0 10" }}>
        First login? Register your infos first...
      </h1>
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
    </React.Fragment>
  );
}
