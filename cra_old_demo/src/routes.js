import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Nutrition from "./pages/Nutrition";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/ranking" element={<Ranking />} />
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route path={`/products/:id`} element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
