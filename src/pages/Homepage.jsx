import Aboutme from "../components/Aboutme";
import { useState } from "react";

const Homepage = () => {
  const [year, setyear] = useState(3);

  const handleClick = () => {
    setyear(year + 1);
  };

  return (
    <>
      <h2>Homepage</h2>
      <Aboutme year={year} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default Homepage;
