import React from "react";
import ImageFirst from "../../../Image/ImageFirst.jpg";
import "./FirstImage.css";

const FirstImage = () => {
  return (
    <div className="FirstImage_Container">
      <img className="FirstImage_Img" src={ImageFirst} alt="" />
    </div>
  );
};

export default FirstImage;
