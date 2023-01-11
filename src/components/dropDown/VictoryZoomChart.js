
// import React, { Component } from 'react'
// import { VictoryBar, VictoryChart, VictoryZoomContainer,
//     VictoryTheme, VictoryScatter } from 'victory';
// class VictoryZoomChart extends React.Component {

//     constructor(props) {
//       super(props);
//     }
  
//     state = {
//       data: this.getScatterData()
//     }
  
//     getScatterData() {
//       return range(50).map((index) => {
//         return {
//           x: random(1, 50),
//           y: random(10, 90),
//           size: random(8) + 3
//         };
//       });
//     }
  
//     render() {
//       return (
//         <VictoryChart
//           domain={{y: [0, 100]}}
//           containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 100]}}/>}
//         >
//           <VictoryScatter
//             data={this.state.data}
//             style={{
//               data: {
//                 opacity: ({ datum }) =>  datum.y % 5 === 0 ? 1 : 0.7,
//                 fill: ({ datum }) => datum.y % 5 === 0 ? "tomato" : "black"
//               }
//             }}
//           />
//         </VictoryChart>
//       );
//     }
//   }
//   export default VictoryZoomChart;