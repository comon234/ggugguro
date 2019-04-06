import React from 'react'
import { getCategories } from '../storage/categories';
import { getBudget } from '../storage/budget';
import { lastDayOfMonth, getDate } from 'date-fns';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const dailyDate = new Date();
export default function DailyBudget() {

  const categories = getCategories();
  console.log(categories);
  const daysOfMonth = getDate(lastDayOfMonth(dailyDate));

  const dailyBudget = Math.round(getBudget(dailyDate) / daysOfMonth);
  
  
  return (
    <div>
      <h1>오늘의 예산 {dailyBudget}원</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>카테고리 명</TableCell>
            <TableCell align="right">금액(원)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map(({category, percent}, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {category}
              </TableCell>
              <TableCell align="right">{Math.round(dailyBudget  / 100 * percent)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}
