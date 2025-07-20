// Routes, Route, BrowserRouter
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Pages
import Home from "./Pages/Home";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
