import React from 'react'
import { getCategories } from '../storage/categories';
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

const dailyDate = new Date();
export default function DailyBudget() {

  const daysOfMonth = getDate(lastDayOfMonth(dailyDate));
  const presentBudget = getPresentBudget();
  
  return (
    <div>
      <Link to={"/"}>
        <Button>
          <HomeButton/>
        </Button>
      </Link>
      <h1 align="center"> {getMonth(dailyDate)+1}월 {getDate(dailyDate)}일</h1>
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

    </div>
  )
}
