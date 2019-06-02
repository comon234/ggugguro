import React, { Component } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state={
            chartData:{
                labels:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            datasets:[
                {
                    label:'원',
                    data:[
                        123000,7000,65000,5000,32400,21938,45892,483,10923,239281,23891,4859
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(22,206,86,0.6)',
                        'rgba(75,152,192,0.6)',
                        'rgba(5,99,132,0.6)',
                        'rgba(54,162,35,0.6)',
                        'rgba(255,26,86,0.6)',
                        'rgba(75,192,112,0.6)'
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
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:'한달 소비 통계',
                            fontSize: 25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:'한달 소비 통계',
                            fontSize: 25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
                </div>
            </div>
        )
    }
}

export default Chart;