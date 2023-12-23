import React from "react";

export default function TopFiveSection({
  bandsInput,
  setBandsInput,
  bandsVector,
  setBandsVector,
  showBandsActionButtons,
  setShowBandsActionButtons,
}) {
  return (
    <div style={{ width: "300px !important" }}>
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
    </div>
  );
}
