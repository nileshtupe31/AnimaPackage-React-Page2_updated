import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BasePage } from "./BasePage/BasePage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { LandingPage } from "./LandingPage";
import { EndPage } from "./EndPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/firstPage" element={<BasePage />} />
        <Route path="/nextpage" element={<SecondPage />} />
        <Route path="/lastpage" element={<ThirdPage />} /> 
        <Route path="/endPage" element={<EndPage />} /> 

      </Routes>
    </Router>
  );
}

export default App;
