import React, {useState} from 'react';
import {getExpenses} from "../storage/expense";
import ExpensesForm from "./ExpenseForm";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { format, parse } from "date-fns";
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const Expenses = () => {
  const expenses = getExpenses();
  const [expenseAddMode, setExpenseAddMode] = useState(false);

  return (
    <div>
      <Link to={"/"}>
        <Button>
          <HomeButton/>
        </Button>
      </Link>
      <ExpensesForm></ExpensesForm>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>카테고리 명</TableCell>
            <TableCell align="right">금액(원)</TableCell>
            <TableCell align="right">날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(expenses).map(key => {
            return expenses[key].map(({date, amount}, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell align="right">{amount}</TableCell>
                <TableCell align="right">{format(parse(date), "MM-DD")}</TableCell>
              </TableRow>
            ))
          })}
        </TableBody>
      </Table>
      <Dialog
          open={expenseAddMode}
          onClose={e => setExpenseAddMode(false)}
          aria-labelledby="form-dialog-title"
        >
        <ExpensesForm
          setExpenseAddMode={setExpenseAddMode}
        />
      </Dialog>
      <Fab
        color="primary"
        aria-label="Add" 
        onClick={e => setExpenseAddMode(true)}
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};


export default Expenses;
