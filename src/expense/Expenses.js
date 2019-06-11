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
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';



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
            <nav class="navbar navbar-default navbar-expand">
      <Link to={"/"}>
        <Button>
          <HomeButton className="font_white"/>
        </Button>
      </Link>
        <a><h3 className="reg_font">지출 추가</h3></a>
      </nav>
    <br></br>
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

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="table_font2">카테고리 명</th>
            <th scope="col" className="table_font2">내용</th>
            <th scope="col" className="table_font2">금액(원)</th>
            <th scope="col" className="table_font2">날짜(일)</th>
            <th scope="col" className="table_font2">후회감</th>
            <th scope="col" className="table_font2">삭제</th>
          </tr>
        </thead>
        <tbody>
{getExpensesFromDate({date}).map(({category, content, amount, regret}, index) => {
  return (
            <tr key={index}>
            <td className="cont_font2" component="th" scope="row">
              {category}
            </td>
            <td className="cont_font2">{content}</td>
            <td className="cont_font2">{amount}</td>
            <td className="cont_font2">{format(parse(date), "MM-DD")}</td>
            <td className="cont_font2">{regret || "0"}</td>
            <td className="cont_font2"><button type="button" class="btn btn-default" className="click_btn" onClick={() => handleDelete({date, index})}>click</button></td>
          </tr>
  )

})}
        </tbody>
      </table>

        <ExpenseForm
          date={date}
          setDate={setDate}
        />

      </Dialog> 
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
