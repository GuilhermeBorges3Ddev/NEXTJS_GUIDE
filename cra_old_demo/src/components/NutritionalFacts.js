import { useEffect, useState } from "react";

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
    <div className="container">
      <header>
        <strong>Nutritional facts:</strong>
      </header>
      {nutriInfo.map((infoItem) => {
        return (
          <article className="post" key={infoItem?.id}>
            <strong className="postTitle">{infoItem?.titulo}</strong>
            <img
              className="postThumb"
              src={infoItem?.capa}
              alt={infoItem?.titulo}
            />
            <p className="postSubtitle">{infoItem?.subtitulo}</p>
            <h5 className="postCategory">Category: {infoItem?.categoria}</h5>
            <button className="postButton">Access</button>
          </article>
        );
      })}
    </div>
  );
}
