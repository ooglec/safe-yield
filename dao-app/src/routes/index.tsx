import { Routes, Route } from "react-router-dom"
import MainContainer from "../pages/MainContainer"
import Dashboard from "../pages/Dashboard"
import Dao from "../pages/Dao";
import Website from "../pages/Website";
import TradeSafe from "../pages/TradeSafe";
import BuyNft from "../pages/BuyNft";
import Comments from "../pages/Comments";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route path="/website" element={<Website />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trade-safe" element={<TradeSafe />} />
        <Route path="/buy-an-nft" element={<BuyNft />} />
        <Route path="/investment" element={<BuyNft />} />
        <Route path="/comments" element={<Comments />} />
      </Route>
    </Routes>
  </>
);
    

export default AppRoutes