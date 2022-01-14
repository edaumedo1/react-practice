import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <li>
        <span onClick={goBack}>뒤로가기</span>
      </li>
    </ul>
  );
}

export default Navigation;
