import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import NavBar from "./components/NavBar";

const RouteSwitch = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
