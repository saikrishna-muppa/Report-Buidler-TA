import { MultilevelMenu } from "react-multilevel-menu";
import {AiOutlineDown,AiOutlineSearch} from "react-icons/ai";
import { MdMailOutline, MdLockOutline } from "react-icons/md";
// import Datetime from "react-datetime";
import "./dropDown.scss"
export default function DropDown() {
  const list = [
 
    
    {
        label: "Flows",
        faIcon: <AiOutlineDown/>,
        items: [
          {
            label: "Inventory flow",
            faIcon: "fas fa-chevron-down"
          },
          {
            label: "Channel flow",
            faIcon: "fas fa-chevron-down"
          },
          {
            label: "Regianal Distribution",
            faIcon: "fas fa-chevron-down"
          },
          {
            label: "New Product Integration",
            faIcon: "fas fa-chevron-down"
          }
        ]
      },
    {
      label: "Dahsboard",
      faIcon: <AiOutlineDown/>,
      items: [
        {
          label: "House",
          faIcon: "fas fa-chevron-down"
        },
        {
          label: "Persons",
          faIcon: "fas fa-chevron-down"
        }
      ]
    },
    {
        label: "Datasets",
        faIcon: <AiOutlineDown/>,
        items: [
          {
            label: "House",
            faIcon: "fas fa-chevron-down"
          },
          {
            label: "Persons",
            faIcon: "fas fa-chevron-down"
          }
        ]
      },
      {
        label: "connectors",
        faIcon: <AiOutlineDown/>,
        items: [
          {
            label: "House",
            faIcon: "fas fa-chevron-down"
          },
          {
            label: "Persons",
            faIcon: "fas fa-chevron-down"
          }
        ]
      },
  
  ];

  const selectedItem = (event) => {
    console.log(event);
  };

  const config = {
    paddingAtStart: true,
    classname: "my-custom-class",
    listBackgroundColor: `white`,
    fontColor: `rgb(8, 54, 71)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    height:"100%"
  };

  return (
  <>
     <div className="search-container">
     <AiOutlineSearch />
        <input
          className="input-field"
          type="text"
          placeholder="Search"
        />
      </div>
     <div> <MultilevelMenu
      list={list}
      configuration={config}
      selectedListItem={selectedItem}
      selectedLabel={selectedItem}
    />
    </div>
  </>
  );
}
