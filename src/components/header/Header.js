import React from "react";
import { AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import { BsChevronCompactLeft } from "react-icons/bs";
import { SlReload } from "react-icons/sl";
import { RxReload } from "react-icons/rx";
import {BsThreeDots } from "react-icons/bs";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title"><span className="header-left arrow-icon"><BsChevronCompactLeft/></span> <div className="header-breadcums"><span className='title'>Projects</span><AiOutlineRight/> <span className='sub-title'>Dahsboard</span><AiFillCaretRight/><span className="inventroy">2022 Inventory Dahsboard</span> <div className="page-name">2022 Inventory Dahsboard</div> </div></div>
      <div className="header-options">
     <div className="header-icons"> <span className='right-reload arrow-icon'><RxReload onClick={()=>alert("You can Reload here")}/></span>
      <span className='left-reload arrow-icon'><SlReload onClick={()=>alert("You can Reload here")}/></span></div>
        <div className="discard-btn" onClick={()=>alert("Discard Changes Here")}>Discard Changes</div>
        <div className="save-btn" onClick={()=>alert("Save Here")}>Save</div>
      <div className="edit arrow-icon" onClick={()=>alert("Edit Here")}><BsThreeDots/></div>
      </div>
    </div>
  );
};

export default Header;
