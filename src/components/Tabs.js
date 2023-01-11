import React from "react";
import { useDrag } from "react-dnd";
import BarChart from "./dropDown/BarChart";
import Chart from "./dropDown/Chart";
import VictoryZoomChart from "./dropDown/VictoryZoomChart";
import "./Tabs.scss";
import PopUpOption from "./header/PopUpOption";
import Popup from 'reactjs-popup';
import Table from "./table/Table";
const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

function Tabs({ id, value, icon, title,edit_icon }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));



  const typeOptions = (type, data) => {
    switch (type) {
      case "dropdown":
        return data.map((ele, i) => {
          return (
            <>
              <div key={i} className="dropdown">
                <h2>{ele.name}</h2>
                <label>{ele.input}</label>
                <select>
                  {ele.options.map((val, i) => {
                    return (
                      <>
                        <option value={val} key={i}>
                          {val}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            </>
          );
        });
        break;
        case "grid":
          return data.map((ele)=>{
            return(
              <>
            <h2>{ele.name}</h2>
              <span>{ele.edit_icon}</span>
              {ele.options.map((val)=>{
                return(
                  <> 
                  <div className="grid">{val}</div>
                  </>
                )
              })}
              </>
            )
          })


      case "chart":
        return data.map((ele) => {
          return (
            <>
             <h2>{ele.name}</h2>
              <Chart />
            </>
          );
        });
        break;
      case "Barchart":
        return data.map((ele) => {
          return (
            <>
             <h2>{ele.name}</h2>
              <BarChart/>
            </>
          );
        });
        break;
        case "Table":
          return data.map((ele) => {
            return (
              <>
                  <h2>{ele.name}</h2>
              <Table/>
              </>
            );
          });
          break;
    }
  };
  return (
    <>
    
      <div className="tab-details" ref={drag}>
        <div
          className="tab"
          style={{
            border: isDragging ? "5px solid pink" : "0px",
          }}
        >
          <span className="tab-icon">{icon} </span>
          {value} <span className="edit-icon"><PopUpOption edit_icon={edit_icon} value={value != "undefined"&&value}/></span>
          {typeof title != "undefined" &&
            title.length &&
            title.map((ele) => {
              return <>{typeOptions(ele.type, title)}</>;
            })}
        </div>
      </div>
    </>
  );
}

export default Tabs;
