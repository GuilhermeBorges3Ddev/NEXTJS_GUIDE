import Main from "./pages/Main";
import Repos from "./pages/Repos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repositories/:repo" element={<Repos />} />
      </Routes>
    </BrowserRouter>
  );
}
