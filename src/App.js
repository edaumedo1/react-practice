import React, { useState, useEffect, useRef } from "react";
import Food from "./Food";
import { foodILike } from "./foodData";

function addNumber(number, setNumber, h1El) {
  setNumber(number + 1); // +1
  console.log(number); // 0
  console.log(h1El.current);
}

function subtractNumber(number, setNumber) {
  setNumber(number - 1);
  console.log(number);
}

function App() {
  //main
  const [number, setNumber] = useState(0);
  const h1El = useRef();
  useEffect(() => {
    if (h1El === null || h1El === undefined) {
      return;
    }
    console.log(h1El);
  }, [number]);

  console.log("일");
  return (
    <div>
      <div>
        {foodILike.map((dish) => (
          <Food
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
          />
        ))}
      </div>
      <h1 ref={h1El}>{number}</h1>
      <button onClick={() => addNumber(number, setNumber, h1El)}>+</button>
      <button onClick={() => subtractNumber(number, setNumber)}>-</button>
    </div>
  );
}

export default App;
