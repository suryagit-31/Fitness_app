import "./index.css";
import LandingPage from "./pages/landingpage";
import HomePage from "./pages/homepage";
import Exercisespage from "./pages/exercises";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/exercises" element={<Exercisespage />}></Route>
      </Routes>
    </>
  );
}

export default App;
