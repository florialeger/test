import React from "react";
import Title from "../../composents/Title/Title";
import Tilt from "../../composents/Tilt/Tilt";
import Image from "../../composents/Image/Image";
import "./Nav1.css";

function Nav1() {
  const tiltOptions = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  };
  return (
    <div>
      <Title title="Vannilla Tilt" />
      <div className="tilt-container">
        <section>
            <p>This is a tilt effect.</p>
        </section>
        <Tilt className="tilt-element" options={tiltOptions}>
          <Image img="/img/rock.jpg" />
        </Tilt>
      </div>
    </div>
  );
}

export default Nav1;
