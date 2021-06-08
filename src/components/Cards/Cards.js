import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from "./Cards.module.css";
import cn from 'classnames';
import CountUp from "react-countup";


export default class Charts extends React.Component {
        state ={
          datas: []       
        }

        componentDidMount = async() => {
            const res = await fetch('https://api.covid19india.org/data.json')
            const datas = await res.json()
            this.setState({datas: datas.statewise[0]})
        }
    
    
        render() {
            return (
                <div className = {styles.container}>
                <Grid container spacing = {3} justify="center">
                        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
                        <CardContent>
                       <Typography color="textSecondary">
                           Infected</Typography>
                       <Typography variant="h5">{this.state.datas.confirmed}
                          </Typography>
                       <Typography color="textSecondary">{this.state.datas.lastupdatedtime}</Typography>
                       <Typography variant="body2">Number of active cases in India Covid-19 </Typography>
                  </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
                        <CardContent>
                       <Typography color="textSecondary" >Recovered</Typography>
                       <Typography variant="h5">{this.state.datas.recovered}</Typography>
                       <Typography color="textSecondary">{this.state.datas.lastupdatedtime}</Typography>
                       <Typography variant="body2">Number of recoveries cases in India</Typography>
                  </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
                        <CardContent>
                       <Typography color="textSecondary" >Deaths</Typography>
                       <Typography variant="h5">{this.state.datas.deaths}</Typography>
                       <Typography color="textSecondary">{this.state.datas.lastupdatedtime}</Typography>
                       <Typography variant="body2">Number of Deaths cases in India Covid-19 </Typography>
                  </CardContent>
             </Grid>

          </Grid>

          
              </div>
            
            
                )

        
    }
}