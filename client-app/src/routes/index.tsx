import { Routes, Route } from "react-router-dom";
import Container from "../components/Container";
import Website from "../pages/website";
import BuySafe from "../pages/buySafe";
import Dashboard from "../pages/dashboard";
import EmmaAI from "../pages/emmaAi";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Website />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="emma-ai" element={<EmmaAI />} />
        <Route path="buy-safe" element={<BuySafe />} />
      </Route>
    </Routes>
  </>
);

export default AppRoutes;
