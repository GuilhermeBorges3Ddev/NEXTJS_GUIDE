import { useState } from "react";
import styled from "styled-components";

const CustomSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DashedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-width: 1px;
  border-style: dashed;
  border-color: red;
  width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 1rem;
  padding: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const FormWithMargin = styled.form`
  margin: 20;
`;

const FullContainerField = styled.div`
  width: 100%;
`;

const RegisterButton = styled.button`
  cursor: pointer;
  display: block;
  margin-top: 15px;
  flex-wrap: nowrap;
`;

const RegisterHeader = styled.h1`
  font-size: 25px;
  margin: 20 0 0 10;
`;

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
    <CustomSection>
      <RegisterHeader>First login? Register your infos first...</RegisterHeader>
      <FormWrapper>
        <FormWithMargin onSubmit={handleRegister}>
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
          <RegisterButton type="submit">Register formulary</RegisterButton>
        </FormWithMargin>
      </FormWrapper>
      <DashedContainer>
        <FullContainerField>
          Form name: {fullFormData.formName}
        </FullContainerField>
        <br />
        <FullContainerField>
          Form age: {fullFormData.formAge ? fullFormData.formAge : ""}
        </FullContainerField>
        <br />
        <FullContainerField>
          Form mail: {fullFormData.formMail}
        </FullContainerField>
        <br />
      </DashedContainer>
    </CustomSection>
  );
}
