import React, { useEffect, useState } from "react";
import ReactToPdf from "react-to-pdf";
import Tabs from "../tabs/Tabs";
const MakingPdf = ({ id, value, comp }) => {
  const ref = React.createRef();
  //   const data = document.getElementById(id);
  const options = {
    // orientation: 'landscape',
    // unit: 'in',
    // format: [4,2]
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const boards = JSON.parse(localStorage.getItem("boards"));
    if (boards) {
        setData(boards);
    }
  }, []);

    let FilterArray=data.filter((val)=>id===val.id);
  return (
    <div>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options}>
        {({ toPdf }) => (
          <button
            onClick={() => {
              console.log(data, "sai");
              toPdf();
            }}
          >
            Reports
          </button>
        )}
      </ReactToPdf>
      <div ref={ref} style={{ max_width: "100%" }}>
        {/* {id}
        {value} */}
        {FilterArray.map((t, i) => {
            console.log(t.title,"data-title");
          return (
            <Tabs
              key={i}
              title={t.title}
              value={t.value}
              id={t.id}
              from={"sai"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MakingPdf;
