import React from 'react';
import {Link} from 'react-router-dom'
import {Chart} from 'react-google-charts'


export default class StateGraph extends React.Component {
    state ={
        datas: []
    }


    componentDidMount = async() => {
        const res = await fetch('https://api.covid19india.org/data.json')
        const datas = await res.json()
        this.setState({datas: datas.statewise})
    }


    render() {
        return (
            <div>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={this.state.datas}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <Link to = "/showgraph"></Link>
          </div>
          )
    }
    
}