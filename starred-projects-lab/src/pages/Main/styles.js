import styled, { keyframes, css } from "styled-components";

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  padding: 8px 7px;
  outline: 0;
  border-radius: 4px;
  color: #0d2636;
  background: transparent;
  border: 0;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

const animateLoading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 15px 0;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animateLoading} 2s linear infinite;
      }
    `}
`;
