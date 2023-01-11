import React from 'react'
import PopUpOption from './PopUpOption';
import {AiOutlineCaretRight,AiOutlineRight} from "react-icons/ai";
import {BsChevronCompactLeft} from "react-icons/bs";
// import {IoReloadSharp} from "react-icons/io";
// import {SlReload} from "react-icons/si";
import "./Header.scss"
const Header = () => {
  return (
   <div className='header-cotnainer'>
    <div className='header-sub-container'>
    <div className='dashboard-left-icon'><BsChevronCompactLeft/></div>
    <div className='header'>
      {/* <BreadCums /> */}
       <div> <span className='title'>Projects</span> <AiOutlineRight/> <span className='sub-title'>Dahsboard</span><AiOutlineRight/>2022 Inventory Dahsboard</div>
       <div className='dashboard-title'>2022 Inventory Dahsboard</div>
        </div>
  
   </div>
   <div className='discard'>
   {/* <div className='dashboard-left-icon'><IoReloadSharp/></div> */}
   {/* <div className='dashboard-left-icon'><SlReload/></div> */}
   </div>
   </div>
  )
}

export default Header