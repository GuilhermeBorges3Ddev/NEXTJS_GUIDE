import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormSection from "./components/FormSection";
import TopFiveSection from "./components/TopFiveSection";
import NutritionalFacts from "./components/NutritionalFacts";
import ChangeNameWrapper from "./components/ChangeNameWrapper";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div id="changeNameWrapper">
              <ChangeNameWrapper />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="formAndTop5">
              <section>
                <FormSection />
              </section>
            </div>
          }
        />
        <Route
          path="/top5"
          element={
            <div className="formAndTop5">
              <TopFiveSection />
            </div>
          }
        />
        <Route path="/nutritional-facts" element={<NutritionalFacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
