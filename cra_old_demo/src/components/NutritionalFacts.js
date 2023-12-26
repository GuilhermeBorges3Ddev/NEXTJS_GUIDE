import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Post = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  background-color: antiquewhite;
  border-radius: 7px;
  border-width: 1px;
  margin: 8px;
  padding: 10px;
`;

const PostTitle = styled.strong`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const PostSubtitle = styled.p`
  margin: 7px;
`;

const PostButton = styled.button`
  height: 40px;
  background: none;
  border-radius: 5px;
  color: #4c89e3;
  border: 2px solid #4c89e3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.5px;
  &:hover {
    background-color: #4c89e3;
    color: #fff;
    cursor: pointer;
  }
`;

export default function NutritionalFacts() {
  const [nutriInfo, setNutriInfo] = useState([]);
  useEffect(() => {
    function loadData() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => setNutriInfo(json));
    }
    loadData();
  }, []);
  return (
    <Container>
      <header>
        <strong>Nutritional facts:</strong>
      </header>
      {nutriInfo.map((infoItem) => {
        return (
          <Post key={infoItem?.id}>
            <PostTitle>{infoItem?.titulo}</PostTitle>
            <img src={infoItem?.capa} alt={infoItem?.titulo} />
            <PostSubtitle>{infoItem?.subtitulo}</PostSubtitle>
            <h5>Category: {infoItem?.categoria}</h5>
            <PostButton>Access</PostButton>
          </Post>
        );
      })}
    </Container>
  );
}
