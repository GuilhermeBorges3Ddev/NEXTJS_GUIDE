import { useEffect, useState } from "react";
import styled from "styled-components";

const CustomSection = styled.div`
  width: "300px";
`;

export default function TopFiveSection() {
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

  return (
    <CustomSection>
      <h1>Add your top 5 favorite bands:</h1>
      <input
        type="text"
        minLength={1}
        value={bandsInput}
        placeholder="Type a band name and click on add button"
        onChange={(e) => setBandsInput(e.target.value)}
      />
      <button
        style={{ marginLeft: 30 }}
        disabled={!bandsInput}
        onClick={() => {
          setBandsVector([...bandsVector, bandsInput]);
          setBandsInput("");
        }}
      >
        Add
      </button>
      <ul>
        {bandsVector.map((band, bandIndex) => (
          <li key={bandIndex}>{band}</li>
        ))}
      </ul>
      {showBandsActionButtons && (
        <div>
          <button
            disabled={bandsVector.length === 5}
            onClick={() => {
              setBandsVector(JSON.parse(localStorage.getItem("@bands")));
            }}
          >
            Use last top 5
          </button>
          <button
            disabled={bandsVector.length === 0}
            onClick={() => {
              localStorage.removeItem("@bands");
              setBandsVector([]);
              setShowBandsActionButtons(false);
            }}
          >
            Reset my top 5
          </button>
        </div>
      )}
    </CustomSection>
  );
}
