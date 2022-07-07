import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </>
  );
};

export default NavBar;
