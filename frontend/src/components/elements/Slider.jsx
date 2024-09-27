import React from "react";


function Slider(props) {
  const { src, variant } = props
    return (
        <div>
            <img className={variant} src={src} alt="banner1" />
        </div>
    );
}

export default Slider;
