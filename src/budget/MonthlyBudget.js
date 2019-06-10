import React, { useState } from 'react'
import { getMonth } from 'date-fns';
import { getBudget } from '../storage/budget';
import BudgetAmountForm from './BudgetAmountForm';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';

const budgetDate = new Date();
export default function BudgetForm() {

  const [editmode, setEditmode] = useState(false);
  const [categoryAddmode, setCategoryAddmode] = useState(false);

  const budget = getBudget(budgetDate);

  return (
    <div>
    <nav class="navbar navbar-default navbar-expand">
      <Link to={"/"}>
        <Button>
          <HomeButton className="font_white"/>
        </Button>
      </Link>
        <a><h3 className="si_1">예산 설정</h3></a>
      </nav>
    <br></br>
     <h3 className="pad_left">
        {getMonth(budgetDate)+1}월 예산
      </h3>
      <h1 align="right" className="just_font">
         {budget || 0}원
        <Fab 
          color="secondary" 
          aria-label="Edit"
          size="small" 
          onClick={e => setEditmode(true)}
        >
          <EditIcon/>
        </Fab>
      </h1>
      <Categories/>
      <Fab
        color="primary"
        aria-label="Add" 
        onClick={e => setCategoryAddmode(true)}
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog
          open={editmode}
          onClose={e => setEditmode(false)}
          aria-labelledby="form-dialog-title"
        >
        <BudgetAmountForm
          date={budgetDate}
          setEditmode={setEditmode}
        />
      </Dialog>
      <Dialog
          open={categoryAddmode}
          onClose={e => setCategoryAddmode(false)}
          aria-labelledby="form-dialog-title"
        >
        <CategoryForm
          setCategoryAddmode={setCategoryAddmode}
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
            </div>
  )
}
