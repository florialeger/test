import React from "react";
import "./BgImage.css";

function BgImage({ img, blur }) {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        filter: `blur(${blur}px)`,
      }}
      className="background-image"
    />
  );
}

export default BgImage;
