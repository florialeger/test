import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Tilt.css";

function Tilt({ options, ...rest }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }

    return () => {
      if (tiltRef.current && tiltRef.current.VanillaTilt) {
        tiltRef.current.VanillaTilt.destroy();
      }
    };
  }, [options]);

  return <div className="tilt-container"ref={tiltRef} {...rest}/>
};

export default Tilt;
