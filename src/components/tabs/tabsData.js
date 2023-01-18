import { MdBackupTable } from 'react-icons/md';
import {BsArrowRight,BsArrowDown,BsThreeDotsVertical} from 'react-icons/bs';
import {TfiText} from 'react-icons/tfi';
import {FcTrademark} from "react-icons/fc";
import {RxDividerHorizontal,RxTable} from 'react-icons/rx'
import {BiDockLeft} from 'react-icons/bi'
import {GiTransform} from 'react-icons/gi'
const data=[{
   "id":"1",
   "value":"Filter",
   icon:<MdBackupTable/>,
   edit_icon:<BsThreeDotsVertical/>,
   "title":[
      {
       "name":"Filter",
       "input":"channel",
       "type":"dropdown",
       "options":["Type(or)Select","A","B","C","D"]
       
   },
   {
      // "name":"Filter",
      "input":"abhi",
      // "type":"dropdown",
      "options":["Type(or)Select","A","B","C","D"]
      
  },
  {
   // "name":"Filter",
   "input":"product",
   // "type":"dropdown",
   "options":["Type(or)Select","A","B","C","D"]
   
}
]

},
{
   "id":"2",
    "value":"Invetory Path",
    icon:<BsArrowRight/> ,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{
      "name":"Invetory Path",
       "input":"value",
       "type":"grid",
       "options":["chocal","Cookies","Ginger Cookie","Sugar Cookie"]
   }]
 },
 {
   "id":"3",
    "value":"Chart",
    icon:<BsArrowDown/>,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{

      "name":"Chart",
       "input":"channel",
       "type":"chart",
       "options":[
    { quarter: 1, earnings: 1000 },
    { quarter: 2, earnings: 500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 1000 },
  ]
   }]
 },
 {
   "id":"4",
    "value":"Barchart",
    icon:<TfiText/> ,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{
      "name":"Barchart",
       "input":"channel",
       "type":"Barchart",
       "options":["A","B","C","D"]
   }]
 },
 {
   "id":"5",
    "value":"MarkDown",
    icon:<FcTrademark/>,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{
         
      "name":"MarkDown",
      "input":"channel",
      "type":"Barchart",
      "options":["Type(or)Select","A","B","C","D"]
      
  }]
 },

 {
   "id":"6",
   "value":"Table",
   icon:<RxTable/>,
   edit_icon:<BsThreeDotsVertical/>,
   "title":[{
         
      "name":"Table",
      "input":"channel",
      "type":"Table",
      "options":["Type(or)Select","A","B","C","D"]
      
  }
]
},
 {
   "id":"7",
    "value":"Divider",
    icon:<RxDividerHorizontal/>,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{
         
      "name":"Divider",
      "input":"channel",
      "type":"dropdown",
      "options":["Type(or)Select","A","B","C","D"]
      
  }]
 },
 {
   "id":"8",
    "value":"Process Diagram",
    icon:<BiDockLeft/>,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{
         
      "name":"Process Diagram",
      "input":"channel",
      "type":"dropdown",
      "options":["Type(or)Select","A","B","C","D"]
      
  }]
 },
 
 {
   "id":"9",
    "value":"Trigger Form[TBD]",
    icon:<GiTransform/> ,
    edit_icon:<BsThreeDotsVertical/>,
    "title":[{   
      "name":"Trigger Form[TBD]",
      "input":"channel",
      "type":"dropdown",
      "options":["Type(or)Select","A","B","C","D"]
      
  }
]
 }
 
]
export default data