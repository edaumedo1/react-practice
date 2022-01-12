import React from "react";
import { Link } from 'react-router-dom';

function Navigation(){
  return (
    <ul>
        <li>
            <Link to="/">홈</Link>
        </li>
        <li>
            <Link to="/about">소개</Link>
        </li>
    </ul>
  );
}

export default Navigation;