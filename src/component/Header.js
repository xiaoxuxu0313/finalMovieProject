import React from 'react';
import Tabs from './Tabs';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="headBar">
      <div className="headBar-left">
        <img
          className="logo"
          src={
            'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
          }
        />
        <Tabs activeTab={props.activeTab} onTabClick={props.onTabClick} />
      </div>
      <div className="headBar-right">
        <Link to="Login">
          <button className="tab">Login</button>
        </Link>
      </div>
    </div>
  );
}
