import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import HomeButton from "@material-ui/icons/Home";
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';

const regret = () => {
  return (

      <div>
        <Link to="/">
          <Button>
            <HomeButton />
          </Button>
        </Link>

        <Link to="/regret/regretHigh">
          <Button>
            <Star />
          </Button>
        </Link>

        <Link to={"/regret/regretMedium"}>
          <Button>
            <StarHalf/>
          </Button>
        </Link>

        <Link to={"/regret/regretLow"}>
          <Button>
            <StarBorder/>
          </Button>
        </Link>
    </div>
  );
};

export default regret;