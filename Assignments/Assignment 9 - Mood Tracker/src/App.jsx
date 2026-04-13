import React, { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("Select your mood");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>😊 Mood Tracker</h1>
      <h2>{mood}</h2>

      <button onClick={() => setMood("😊 Happy")}>Happy</button>
      <button onClick={() => setMood("😐 Neutral")}>Neutral</button>
      <button onClick={() => setMood("😢 Sad")}>Sad</button>
    </div>
  );
}

export default MoodTracker;