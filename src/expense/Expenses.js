import React, { useState } from 'react';
import { getExpensesFromDate } from "../storage/expense";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import { format, parse } from "date-fns";
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ExpenseForm from "./ExpenseForm";
import { Calendar } from "react-calendar";
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';

const Expenses = () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <nav class="navbar navbar-default navbar-expand">
      <Link to={"/"}>
        <Button>
          <HomeButton className="font_white"/>
        </Button>
      </Link>
        <a><h3 className="si_1">지출 추가</h3></a>
      </nav>
    <br></br>
      <DialogContent align="center">
        <Calendar
          onClickDay={(date) => setDate(date)}
          view={"month"}
          formatMonthYear={(locale, date) => format(date, 'YYYYMM')}
          prev2Label={null}
          next2Label={null}
        />
      </DialogContent>
      <Dialog
          open={date !== null}
          onClose={e => setDate(null)}
          aria-labelledby="form-dialog-title"
        >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>카테고리 명</TableCell>
              <TableCell>내용</TableCell>
              <TableCell align="right">금액(원)</TableCell>
              <TableCell align="right">날짜</TableCell>
              <TableCell align="right">후회감</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getExpensesFromDate({date}).map(({category, content, amount, regret}, i) => {
              return (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {category}
                  </TableCell>
                  <TableCell align="right">{content}</TableCell>
                  <TableCell align="right">{amount}</TableCell>
                  <TableCell align="right">{format(parse(date), "MM-DD")}</TableCell>
                  <TableCell align="right">{regret || "0"}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <ExpenseForm
          date={date}
          setDate={setDate}
        />

      </Dialog>

      <nav class="navbar fixed-bottom navbar-default">
          <Link to="/daily">
              <Button>
                <AttachMoney className="si_1"/>
              </Button>
          </Link>
          <Link to={"/budget"}>
            <Button>
              <AccountBalanceWallet className="si_1"/>
            </Button>
          </Link>
          <Link to={"/expense" }>
            <Button>
              <DoneOutline className="si_1"/>
            </Button>
          </Link>
          <Link to={"/statistics"}>
            <Button>
              <Poll className="si_1"/>
            </Button>
          </Link>
          <Link to={"/regret"}>
            <Button>
              <Warning className="si_1"/>
            </Button>
          </Link>
      </nav>
          
      {/*<Fab*/}
      {/*  color="primary"*/}
      {/*  aria-label="Add" */}
      {/*  onClick={e => setExpenseAddMode(true)}*/}
      {/*  style={{*/}
      {/*    position: 'absolute',*/}
      {/*    bottom: 40,*/}
      {/*    right: 40,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <AddIcon />*/}
      {/*</Fab>*/}
    </div>
  );
};


export default Expenses;
