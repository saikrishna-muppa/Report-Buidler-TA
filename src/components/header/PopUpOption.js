import { React } from "react";
import Popup from "reactjs-popup";
import MakingPdf from "../pdf/MakingPdf";
import "./Header.scss";

const PopUpOption = ({ edit_icon, value, id }) => {
  const contentStyle = {
    maxWidth: "800px",
    top: "-200px",
    width: "90%",
  };
  return (
    <div>
      <Popup
        trigger={<button className="button"> {edit_icon} </button>}
        modal
        contentStyle={contentStyle}
      >
        {(close) => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">{value}</div>
            <div className="content">
              {value}Reports Here
              {/* {comp()} */}
            </div>

            <div className="actions">
              <Popup
                trigger={
                  <button className="button">
                    <MakingPdf id={id} value={value} />
                  </button>
                }
                position="top center"
                closeOnDocumentClick
                contentStyle={{ padding: "0px", border: "none" }}
              ></Popup>

              {/* <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button> */}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default PopUpOption;
