import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import HomeButton from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { getLowList} from '../storage/regret';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Poll from '@material-ui/icons/Poll';
import Warning from '@material-ui/icons/Warning';

export default function RegretLow() {
  const lowList = getLowList();

  return (
    <div>
      <nav class="navbar navbar-default navbar-expand">
      <Link to={"/"}>
        <Button>
          <HomeButton className="font_white"/>
        </Button>
      </Link>
      <a><h3 className="reg_font">Regret : Low</h3></a>
      </nav>
      <br></br>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="table_font">카테고리 명</th>
            <th scope="col" className="table_font">내용</th>
            <th scope="col" className="table_font">금액(원)</th>
            <th scope="col" className="table_font">후회감</th>
            <th scope="col" className="table_font">날짜(일)</th>
          </tr>
        </thead>
        <tbody>
        {lowList.map(({category, content, amount, regret, day}, i) => (
          <tr key={i}>
            <td className="cont_font" component="th" scope="row">
              {category}
            </td>
            <td className="cont_font">{content}</td>
            <td className="cont_font">{amount}</td>
            <td className="cont_font">{regret}</td>
            <td className="cont_font">{day}</td>
          </tr>
        ))}
        </tbody>
      </table>
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
    </div>
  )
}
