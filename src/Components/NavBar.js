import React, { useState } from 'react';

export const NavBar = ({ navstyle, textStyle }) => {

  return (
    <div>
      <nav style={navstyle} >
        <Element text="Home" textStyle={textStyle} />
        <Element text="Prediction" textStyle={textStyle} />
        <Element text="Data" textStyle={textStyle} />
        
      </nav>
    </div>
  );
};

function Element({ text, textStyle }) {
    const [hover, setHover] = useState(false);
    const dynamicStyle = {
    ...textStyle,
    color: hover ? '#c2e4f8' : textStyle.color,
  };
    return (
    <>
      <label style={dynamicStyle} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{text}</label>
    </>
  );
}
