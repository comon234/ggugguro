import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import HomeButton from "@material-ui/icons/Home";
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';
const regret = () => {
  return (

      <div>

      <nav class="navbar navbar-default navbar-expand">
      <Link to={"/"}>
        <Button>
          <HomeButton className="font_white"/>
        </Button>
      </Link>
        <a><h3 className="si_1">후회감</h3></a>
      </nav>
    <br></br>
      <div className="plus">
        <table>
          <tr>
            <td>
        <Link to="/regret/regretHigh">
          <Button>
            <Star style={{ fontSize: 80 }}/>
          </Button>
        </Link></td>
        <td>
        <Link to={"/regret/regretMedium"}>
          <Button>
            <StarHalf style={{ fontSize: 80 }}/>
          </Button>
        </Link></td>
        <td>
        <Link to={"/regret/regretLow"}>
          <Button>
            <StarBorder style={{ fontSize: 80 }}/>
          </Button>
        </Link>
        </td>
        </tr>
        </table>
        </div>

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
  );
};

export default regret;