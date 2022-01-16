import React from "react";
import { useLocation, useMatch, useParams } from "react-router";

function Detail() {
  const { state } = useLocation();
  const match = useMatch("/food/:foods"); //useMatch 선언 /페이지이름/:전달인자
  const params = useParams();
  console.log(params);
  console.log(match);
  return (
    <div>
      <div>{state.name}</div>
      <div>{state.rating}</div>
      <div>
        <img src={state.picture}/>
      </div>
    </div>
  );
}

export default Detail;
