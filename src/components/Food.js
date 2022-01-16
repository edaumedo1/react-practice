import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Food({ name, picture, rating }) { //Food 컴포넌트
  const navigate = useNavigate(); //네비게이션 선언
  const movePage = () => { //페이지 이동
    navigate(`/food/${name}`, { //네비게이션 state 값 지정
      state: {
        name,
        picture,
        rating,
      },
    });
  };

  return (
    <div onClick={movePage}> {/* onClick => 페이지 이동 */}
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = { //propTypes = 권장 type을 지정해주어 타입 오류를 사전에 방지
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

Food.defaultProps = { //빈값 data 받을 때 채워줄 default 값
  name: "치킨",
  picture:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  rating: 0,
};

export default Food;
