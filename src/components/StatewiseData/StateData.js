import React from "react";
import './StateData.css'

export default class StateData extends React.Component {
      state = {
      datas:[]
    }
  
  componentDidMount = async() => {
    const res = await fetch('https://api.covid19india.org/data.json')
    const datas = await res.json()
    this.setState({datas: datas.statewise})

  }

  render() {
    return (
      <>
   
      <div className="container-fluid mt-5">
        <div className="main-heading">
        <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA </span>Covid-19 Dashboard</h1>
        </div>
        
        <div className="table-responsive">
        <table className="table table-hover">
        <thead className="thead-dark">
        <tr>
            <th>State</th>
            <th>Confimed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Updated</th>
          </tr>
     </thead>
     <tbody>
     {this.state.datas.map((data,index) => {
            return (
              <tr key={index}>
            <td>{data.state}</td>
            <td>{data.confirmed}</td>
            <td>{data.recovered}</td>
            <td>{data.deaths}</td>
            <td>{data.active}</td>
            <td>{data.lastupdatedtime}</td>
          </tr>
            )
          })}
           </tbody>
      </table>
    </div> 
  </div>
</>
    )
  }
}
