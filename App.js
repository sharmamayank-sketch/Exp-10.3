import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://YOUR-BACKEND-ALB-ENDPOINT/")
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage("Error connecting to backend."));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Full Stack AWS App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
