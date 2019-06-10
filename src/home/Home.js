import React from 'react';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { getBudget } from "../storage/budget";
import { getMonth } from "date-fns";
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';
import './../App.css';

const budgetDate = new Date();
const Home = () => {
  const budget = getBudget(budgetDate);
  return (
    <div>
      <div class="container back_col">
        <div class="col" className="ggrid">
          <h4 className="cent_font">거꾸로 가계부</h4>
        </div>
      </div>
    <div className="home_font">
      <table className="res-table">
          <tr>
            <td><Link to="/daily">
              <Button>
                <AttachMoney className="si_3" style={{ fontSize: 80 }} />
              </Button>
            </Link></td>
            <td>
        <Link to={"/budget"}>
          <Button>
            <AccountBalanceWallet className="si_3" style={{ fontSize: 80 }}/>
          </Button>
        </Link></td>
        </tr><tr>
            <td>
        <Link to={"/expense" }>
          <Button>
            <DoneOutline className="si_3" style={{ fontSize: 80 }}/>
          </Button>
        </Link></td>

            <td>

        <Link to={"/statistics"}>
          <Button>
            <Poll className="si_3" style={{ fontSize: 80 }}/>
          </Button>
        </Link></td>
        </tr>
        <tr>
          <td>
        <Link to={"/regret"}>
          <Button>
            <Warning className="si_3" style={{ fontSize: 80 }}/>
          </Button>
        </Link>
        </td>
        </tr>
        </table>
        </div>

        </div>   
  );
};

export default Home;
