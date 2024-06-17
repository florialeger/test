import React from "react";
import BgImage from "../../composents/BgImage/BgImage";
import Blur from "../../Blur/Blur";
import "./Nav2.css";

function Nav2() {
  return (
    <div className="Nav2">
      <BgImage img="/img/planche1.PNG" />
      <Blur text="Blur Effect..." />
    </div>
  );
}

export default Nav2;
