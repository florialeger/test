import React from "react";
import './Title.css';
import Tilt from "../Tilt/Tilt";

function Title({title}) {
    return (
        <h1 className="title">{title}</h1>
    );
};

export default Title;