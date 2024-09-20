import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PolicyPage } from "../pages/PolicyPage";
import { TermsPage } from "../pages/TermsPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Policy" element={<PolicyPage />} />
      <Route path="/Terms" element={<TermsPage />} />
    </Routes>
  );
};
