import React, { useState } from 'react';
import { deleteExpense, getExpensesFromDate } from "../storage/expense";
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

const Expenses = () => {
  const [date, setDate] = useState(null);

  const handleDelete = ({index, date}) => {
    const answer = window.confirm("삭제하시겠습니다?");

    if (answer === false) {
      return;
    }
    
    deleteExpense({index, date});
    window.location.reload();
  };
  return (
    <div>
      <Link to={"/"}>
        <Button>
          <HomeButton/>
        </Button>
      </Link>

      <DialogTitle id="form-dialog-title" align="center">지출 추가</DialogTitle>
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
              <TableCell align="right">삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getExpensesFromDate({date}).map(({category, content, amount, regret}, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {category}
                  </TableCell>
                  <TableCell align="right">{content}</TableCell>
                  <TableCell align="right">{amount}</TableCell>
                  <TableCell align="right">{format(parse(date), "MM-DD")}</TableCell>
                  <TableCell align="right">{regret || "0"}</TableCell>
                  <TableCell align="right"><Button onClick={() => handleDelete({date, index})}>click</Button></TableCell>
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
