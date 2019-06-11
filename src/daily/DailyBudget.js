import React from 'react'
import { getPresentBudget} from '../storage/expense';
import { lastDayOfMonth, getDate, getMonth } from 'date-fns';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';


const dailyDate = new Date();
export default function DailyBudget() {

  const daysOfMonth = getDate(lastDayOfMonth(dailyDate));
  const presentBudget = getPresentBudget();



  
  return (
    <div>
       <nav class="navbar navbar-default navbar-expand">
      <Link to={"/"}>
        <Button>
          <HomeButton className="font_white"/>
        </Button>
      </Link>
        <a><h3 className="reg_font">오늘의 예산</h3></a>
      </nav>
    <br></br>
          <h1 className="cent_font"> {getMonth(dailyDate)+1}월 {getDate(dailyDate)}일</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>카테고리 명</TableCell>
            <TableCell align="right">금액(원)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {presentBudget.map((value, i) => (
            <TableRow key={i}> 
              <TableCell component="th" scope="row">
                {Object.keys(value)}
              </TableCell>
              <TableCell align="right">{Math.round(value[Object.keys(value)]/daysOfMonth)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <nav class="navbar fixed-bottom navbar-default">
          <Link to="/daily">
              <Button>
                <AttachMoney className="font_white"/>
              </Button>
          </Link>
          <Link to={"/budget"}>
            <Button>
              <AccountBalanceWallet className="font_white"/>
            </Button>
          </Link>
          <Link to={"/expense" }>
            <Button>
              <DoneOutline className="font_white"/>
            </Button>
          </Link>
          <Link to={"/statistics"}>
            <Button>
              <Poll className="font_white"/>
            </Button>
          </Link>
          <Link to={"/regret"}>
            <Button>
              <Warning className="font_white"/>
            </Button>
          </Link>
      </nav>
    </div>
  )
}
