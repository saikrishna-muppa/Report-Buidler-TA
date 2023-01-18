import React from "react";
import "./Button_btn.scss"
const Button_btn = ({ name, onClick, selected,icon }) => {
  return (
    <button
    onClick={()=>onClick(name)} className={`btn chart_btn ${name===selected ? "components_btn" : ""}`}
    >
     <span>{icon}</span> {name}
    </button>
  );
};

export default Button_btn;
