import React from "react";
import { useDrag } from "react-dnd";
import BarChart from "../dropDown/BarChart";
import Chart from "../dropDown/Chart";
import "./Tabs.scss";
import PopUpOption from "../header/PopUpOption";
import Table from "../table/Table";

const contentStyle = {
  maxWidth: "600px",
  width: "90%",
};

function Tabs({ id, value, icon, title, edit_icon,from }) {
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
        return data.map((ele, i) => {
          return (
            <>
              <h2>{ele.name}</h2>
              <span>{ele.edit_icon}</span>
              {ele.options.map((val) => {
                return (
                  <>
                    <div className="grid" key={i}>
                      {val}
                    </div>
                  </>
                );
              })}
            </>
          );
        });

      case "chart":
        return data.map((ele, i) => {
          return (
            <>
              <h2 key={i}>{ele.name}</h2>
              <Chart />
            </>
          );
        });
        break;
      case "Barchart":
        return data.map((ele, i) => {
          return (
            <>
              <h2 key={i}>{ele.name}</h2>
              <BarChart />
            </>
          );
        });
        break;
      case "Table":
        return data.map((ele, i) => {
          return (
            <>
              <h2 key={i}>{ele.name}</h2>
              <Table />
            </>
          );
        });
        break;
    }
  };

  return (
    <>
      <div id={"tab" + id} style={{maxWidth:"700px"}} className="tab-details" ref={from?null:drag}>
        <div
          className="tab"
          style={{
            border: isDragging ? "5px solid pink" : "0px",
          }}
        >
          <span className="tab-icon">{icon} </span>
          {value}
          <span className="edit-icon">
            <PopUpOption
              edit_icon={edit_icon}
              value={value}
              id={id}
            />
          </span>
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
