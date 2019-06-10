import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { getTotalExpense } from '../storage/expense';

const totalExpenses = getTotalExpense();

const chartList= [];
const chartValue = [];

for (const i in totalExpenses){
    const key= Object.keys(totalExpenses[i]); 
    chartList.push(key[0]);
    chartValue.push(totalExpenses[i][key])
    
}

class chart extends Component{
    
    constructor(props) {
        super(props);
        this.state={
            chartData:{
                labels: chartList,
                datasets:[
                    {
                    label:'원',
                    data: chartValue,
                    backgroundColor:[
                        'rgba(255,0,0,0.6)',
                        'rgba(0,255,255,0.6)',
                        'rgba(0,0,255,0.6)',
                        'rgba(173,138,156,0.6)',
                        'rgba(0,0,160,0.6)',
                        'rgba(128,0,128,0.6)',
                        'rgba(255,255,0,0.6)',
                        'rgba(0,255,0,0.6)',
                        'rgba(255,0,255,0.6)',
                        'rgba(75,192,112,0.6)',
                        'rgba(0,0,0,0.6)',
                        'rgba(120,120,120,0.6)',
                        'rgba(128,128,128,0.6)',
                        'rgba(255,165,0,0.6)',
                        'rgba(165,42,42,0.6)',
                        'rgba(0,128,0,0.6)',
                        'rgba(255,0,0,0.6)',
                        'rgba(0,255,255,0.6)',
                        'rgba(0,0,255,0.6)',
                        'rgba(173,138,156,0.6)',
                        'rgba(0,0,160,0.6)',
                        'rgba(128,0,128,0.6)',
                        'rgba(255,255,0,0.6)',
                        'rgba(0,255,0,0.6)',
                        'rgba(255,0,255,0.6)',
                        'rgba(75,192,112,0.6)',
                        'rgba(0,0,0,0.6)',
                        'rgba(120,120,120,0.6)',
                        'rgba(128,128,128,0.6)',
                        'rgba(255,165,0,0.6)',
                        'rgba(165,42,42,0.6)',
                        'rgba(0,128,0,0.6)',
                    ]
                }
            ]}
        }
    }

    render() {
        return (
            
            <div>
            
                <Link to={"/"}>
                    <Button>
                    <HomeButton/>
                    </Button>
                </Link>
                <div className="chart">
                <center>
                    <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:'카테고리별 통계',
                            fontSize: 25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                /></center>
              </div>
            </div>
        )
    }
}

export default chart;