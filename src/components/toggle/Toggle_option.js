import React, { useState } from 'react'
import Button_btn from '../btn/Button_btn';
import {GiTransform} from "react-icons/gi";
import {AiOutlinePieChart} from "react-icons/ai"
import "./Toggle_option.scss"
const Toggle_option = () => {
  const [selected, setSelected] = useState("Components");
  
  const handleClick = (name) => {
    setSelected(name)
  }
  return (
    <div className='toggle-container'>
         <Button_btn name="Components" icon={<GiTransform/>} selected={selected} onClick={handleClick}/>
        <Button_btn name="Chart" icon={<AiOutlinePieChart/>}   selected={selected} onClick={handleClick}/>
    </div>
  )
}

export default Toggle_option