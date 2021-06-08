// import React, { useState, useEffect } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import styles from './StateGraph.module.css';

// export default class StateGraph extends React.Component {
//     state ={
//       dailyData: []       
//     }

//     componentDidMount = async() => {
//         const res = await fetch('https://api.covid19india.org/data.json')
//         const datas = await res.json()
//         this.setState({dailyData: datas.statewise})
//     }


 
// render() {

//     const {dailyData, confirmed, state} = this.state

//     const barChart = (
//         confirmed ? (
//           <Bar
//             data={{
//               labels: ['Infected', 'Recovered', 'Deaths'],
//               datasets: [
//                 {
//                   label: 'People',
//                   backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//                   data: [this.state.dailyData.confirmed, this.state.dailyData.recovered, this.state.dailyData.deaths],
//                 },
//               ],
//             }}
//             options={{
//               legend: { display: false },
//               title: { display: true, text: `Current state in ${state}` },
//             }}
//           />
//         ) : null
//       );

//     const lineChart = (
//         dailyData[0] ? (
//           <Line
//             data={{
//               labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
//               datasets: [{
//                 data: dailyData.map((data) => this.state.data.confirmed),
//                 label: 'Infected',
//                 borderColor: '#3333ff',
//                 fill: true,
//               }, {
//                 data: dailyData.map((data) => this.state.data.deaths),
//                 label: 'Deaths',
//                 borderColor: 'red',
//                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
//                 fill: true,
//               },  {
//                 data: dailyData.map((data) => this.state.data.recovered),
//                 label: 'Recovered',
//                 borderColor: 'green',
//                 backgroundColor: 'rgba(0, 255, 0, 0.5)',
//                 fill: true,
//               },
//               ],
//             }}
//           />
//         ) : null
//       );
    
//       return (
//         <div className={styles.container}>
//           {state ? barChart : lineChart}
//         </div>
//       );

// }

// };

