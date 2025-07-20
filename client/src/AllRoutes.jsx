// Routes, Route, BrowserRouter
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
