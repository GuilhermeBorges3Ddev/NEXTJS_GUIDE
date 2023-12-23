import React from "react";

export default function ViewFormFields({ fullFormData }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px dashed red",
        width: "300px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
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
  );
}
