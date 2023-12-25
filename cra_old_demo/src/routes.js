import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";
import Nutrition from "./pages/Nutrition";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
