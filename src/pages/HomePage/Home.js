//ComponentDidMount //ComponentDidUpdate //ComponentWillUnmount
import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Food from "../../components/Food";
import { foodILike } from "../../foodData";

function addNumber(number, setNumber) { // +버튼에 쓰임
  setNumber(number + 1); // +1
  console.log(number); // 0
}

function subtractNumber(number, setNumber) {// -버튼에 쓰임
  setNumber(number - 1);
  console.log(number);
}

function App() { // App 컴포넌트
  //main
  const [number, setNumber] = useState(0); // useState number 선언
  //1
  const h1El = useRef(); // const h1el = document.getElementById('h1'), 
  const firstBtn = useRef(); //use
  const secondBtn = useRef();
  //3
  useEffect(() => {
    if (h1El.current && firstBtn.current && secondBtn.current) {
      h1El.current.addEventListener("click", () => {
        console.log("ssss");
      });

      firstBtn.current.addEventListener("click", () => {
        // document.body.style.backgroundColor = "black";
      });
      secondBtn.current.addEventListener("click", () => {
        // document.body.style.backgroundColor = "white";
      });

      if (number >= 5) {
        h1El.current.style.backgroundColor = "blue";
      } else {
        h1El.current.style.backgroundColor = "white";
      }
    }

    return () => {
      if (h1El.current && firstBtn.current && secondBtn.current) {
        h1El.current.removeEventListener("click", () => {
          console.log("ssss");
        });
        firstBtn.current.removeEventListener("click", () => {
          document.body.style.backgroundColor = "black";
        });
        secondBtn.current.removeEventListener("click", () => {
          document.body.style.backgroundColor = "white";
        });
      }
    };
  }, [number]);

  console.log("일");
  //2
  return (
    <div>
      <Outlet />
      <div>
        {foodILike.map((dish, i) => ( // map => foodILike.data 전부 가져옴
          <Food
            key={i}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
          />
        ))}
      </div>
      <h1 ref={h1El}>{number}</h1>
      <button ref={firstBtn} onClick={() => addNumber(number, setNumber)}>
        +
      </button>
      <button ref={secondBtn} onClick={() => subtractNumber(number, setNumber)}>
        -
      </button>
    </div>
  );
}

export default App;
