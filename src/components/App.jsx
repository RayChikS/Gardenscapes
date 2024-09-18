import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Policy } from "../pages/Policy";
import { Terms } from "../pages/Terms";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Policy" element={<Policy />} />
      <Route path="/Terms" element={<Terms />} />
    </Routes>
  );
};
