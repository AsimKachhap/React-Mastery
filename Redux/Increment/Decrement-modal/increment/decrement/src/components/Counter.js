import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="increment-decrement-modal">
      <h3>Redux Counter</h3>
      <p className="counter">{counter}</p>
      <div className="increment-decrement-buttons">
        <div className="button-container">
          <AiFillMinusSquare className="buttons" onClick={decrementHandler} />
        </div>
        <div className="button-container">
          <AiFillPlusSquare className="buttons" onClick={incrementHandler} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
