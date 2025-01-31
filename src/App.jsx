import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/acm")}>Go to AcmPage</button>
      <button onClick={() => navigate("/amoli")}>Go to AcmPage</button>
      <button onClick={() => navigate("/darpan")}>Go to AcmPage</button>
      <button onClick={() => navigate("/dantvilla")}>Go to AcmPage</button>
      <button onClick={() => navigate("/quamin")}>Go to AcmPage</button>
      <button onClick={() => navigate("/reliance")}>Go to AcmPage</button>
      <button onClick={() => navigate("/sciClub")}>Go to AcmPage</button>
    </div>
  );
};

export default App;
