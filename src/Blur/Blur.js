import React from "react";
import './Blur.css';

function Blur({text}) {
    return ( 
        <div className="blur-container">
            <p>{text}</p>
        </div>
    );
};

export default Blur;