import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getCategories } from '../storage/categories';
import { getplayList } from '../storage/chart';

const Categories = getCategories();
const playList = getplayList();

class chart extends Component{
    constructor(props) {
        super(props);
        this.state={
            chartData:{
                labels:['식비', '잡비', '유흥비', '교통비'
                    ],
                datasets:[
                    {
                    label:'원',
                    data: [1,2,3,4],
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
                <center><Link to={"/statistics/a"}>
                        <Button>
                            식비   
                        </Button>
                        </Link>

                        <Link to={"/statistics/b"}>
                        <Button>
                            잡비
                        </Button>
                        </Link>

                        <Link to={"/statistics/c"}>
                        <Button>
                            유흥비
                        </Button>
                        </Link>

                        <Link to={"/statistics/d"}>
                        <Button>
                            교통비
                        </Button>
                        </Link>

                        <Link to={"e"}>
                        <Button>
                        총 지출액
                        </Button>
                        </Link>
                    </center>
                    <h1 align="center">유흥비</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>카테고리 명</TableCell>
            <TableCell >금액(원)</TableCell>
            <TableCell >regret</TableCell>
            <TableCell >날짜(일)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {playList.map(({category, amount, regret, day}, i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">
              {category}
            </TableCell>
            <TableCell >{amount}</TableCell>
            <TableCell>{regret}</TableCell>
            <TableCell>{day}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
                </div>
            </div>
        )
    }
}

export default chart;