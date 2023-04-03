import React from "react";
import "./style.css";
import {useRecoilState} from "recoil";
import {colorState} from './colorState';
export default function ColorText(){
  const [color,setColor]=useRecoilState(colorState);
  const [textColor,setTextColor]=useRecoilState(colorState);
  const handleButtonClick=()=>{
    setColor(color==='blue'?'red':'blue');
  };

  return (
    <div>
      
      <p style={{ color: color }}>Hi,I change the color on click button</p>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
}
