import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </>
  );
};
