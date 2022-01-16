import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate(); //네비게이션 선언
  const goBack = () => { 
    navigate(-1); //number = 음수: 이전페이지, 양수: 다음페이지
  };

  return (// Link = to="": (JAVA)href=""
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <li>
        <Link to="/test">테스트</Link>
      </li>
      <li>
        <span onClick={goBack}>뒤로가기</span>{/* onClick => navigate(-1) */}
      </li>
    </ul>
  );
}

export default Navigation;
