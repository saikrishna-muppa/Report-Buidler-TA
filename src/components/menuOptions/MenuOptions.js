import React from 'react'
import MenuIcons from './MenuIcons'
import "./MenuOptions.scss"
import profile from "../../assests/avatar.jpeg"
import {TbLayoutSidebarRightCollapse} from "react-icons/tb"
const MenuOptions = () => {
  return (
  <>
  <div>{MenuIcons.map((ele,i)=>{
    return (
        <>
        <div className='menu-icons'key={i}>{ele.icon}</div>
        </>
    )
  })}
   <div className='avatar'><img src={profile} alt="profile"/></div>
  <div className='close-icon'><TbLayoutSidebarRightCollapse/></div>
  </div>
 
  </>
  )
}

export default MenuOptions