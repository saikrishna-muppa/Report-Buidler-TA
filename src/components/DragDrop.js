import React, { useEffect, useState } from "react";
import Tabs from "./tabs/Tabs";
import { useDrop } from "react-dnd";
import "../App.css";
import tabsData from "./tabs/tabsData";
import DropDown from "./dropDown/DropDown";
import Header from "./header/Header";
import "./tabs/Tabs.scss";
import Toggle_option from "./toggle/Toggle_option";
function DragDrop() {
  const [board, setBoard] = useState([]);
  const [Allboard, setAllBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    const tabsdetails = tabsData.filter((picture) => id === picture.id);
    setBoard((board) => [...board, tabsdetails[0]]);
    let filterArrayData = Allboard;
    filterArrayData.push(tabsdetails[0]);
    localStorage.setItem("boards", JSON.stringify(filterArrayData));
    setAllBoard(filterArrayData);
  };
  return (
    <>
      <div>
        <Header />
        <div className="main-container">
          <div className="dropdown-container">
            <DropDown />
          </div>
          <div className="canavs-cantainer" ref={drop}>
            {board.map((tab, i) => {
              return (
                <Tabs
                  key={i}
                  title={tab.title}
                  edit_icon={tab.edit_icon}
                  value={tab.value}
                  id={tab.id}
                />
              );
            })}
          </div>
          <div className="tab-container">
            <Toggle_option/>
            {tabsData.map((tab, i) => {
              return (
                <Tabs key={i} value={tab.value} icon={tab.icon} id={tab.id} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DragDrop;
