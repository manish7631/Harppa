import React from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import FirstImage from "./FirstImage/FirstImage";
import SecondImage from "./SecondImage/SecondImage";
import ThirdImage from "./ThirdImage/ThirdImage";
import FourthGrid from "./FourthGrid/FourthGrid";

const Home = () => {
  return (
    <div>
      <FirstImage />
      <SecondImage />
      <ThirdImage />
      <FourthGrid />
    </div>
  );
};

export default Home;
