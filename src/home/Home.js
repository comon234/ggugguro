import React from 'react';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { getBudget } from "../storage/budget";
import { getMonth } from "date-fns";
import Dock from '@material-ui/icons/Dock';

const budgetDate = new Date();
const Home = () => {
  const budget = getBudget(budgetDate);
  return (
    <div>
      {getMonth(budgetDate)+1}월의 예산 {budget || 0}원
      <div>
        <Link to="/daily">
          <Button>
            <AttachMoney />
          </Button>
        </Link>

        <Link to={"/budget"}>
          <Button>
            <AccountBalanceWallet/>
          </Button>
        </Link>

        <Link to={"/expense"}>
          <Button>
            <DoneOutline/>
          </Button>
        </Link>

        <Link to={"/statistics"}>
          <Button>
            <Dock/>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
