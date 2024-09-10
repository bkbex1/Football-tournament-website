import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import MatchInfo from "./MatchInfo";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:match" element={<MatchInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
