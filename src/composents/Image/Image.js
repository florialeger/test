import React from "react";
import "./Image.css";

function Image({ img }) {
  return <img className="img" src={img} alt={img} />;
}

export default Image;
