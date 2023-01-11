import React, { useState } from "react";
import Tabs from "./Tabs";
import { useDrop } from "react-dnd";
import "../App.css";
import tabsData from "./tabsData"
import DropDown from "./dropDown/DropDown";
import Header from "./header/Header";
import Chart from "./dropDown/Chart";

// import "./Tabs.scss"
function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    const tabsdetails = tabsData.filter((picture) => id === picture.id);
    setBoard((board) =>  [...board, tabsdetails[0]]);
  };
  return (
    <>
    <Header/>
      <div className="main-container">
      
      <div className="dropdown-container">
      <DropDown />
      </div>
      <div className="canavs-cantainer" ref={drop}>
        {board.map((tab,i) => {
          return <Tabs key={i} title={tab.title}  edit_icon={tab.edit_icon} />;
        })}

      </div>
  
      <div className="tab-container">
        {tabsData.map((tab,i) => {
          return <Tabs  key={i} value={tab.value} icon={tab.icon} id={tab.id}  />;
        })}
      </div>
      </div>
    </>
  );
}

export default DragDrop;
