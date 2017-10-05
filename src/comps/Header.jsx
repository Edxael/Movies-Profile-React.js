import React from 'react';
import HeadPic from './img/Mov-Head.png';

const Header = () => {
  const contimg = { background: "gray", border: "4px solid white", margin: "15px 0px", padding: "12px" }
  const picStyle = { background: "gray", margin:"0px auto", display:"block" }
  return(
    <div style={contimg}>
      <img src={HeadPic} style={picStyle} alt="Missing Picture"/>
    </div>
  )
}

export default Header;
