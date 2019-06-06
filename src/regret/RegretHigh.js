import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { getHighList} from '../storage/regret';

export default function RegretHigh() {
  const highList = getHighList();

  return (
    <div>
      <Link to={"/"}>
        <Button>
          <HomeButton/>
        </Button>
      </Link>
      <h1 align="center">Regret : High</h1>
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
        {highList.map(({category, amount, regret, day}, i) => (
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
  )
}
