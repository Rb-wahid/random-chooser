import React from "react";
import "./QnA.css";

const QnA = () => {
  return (
    <div>
      <h2 className="text-center">Reactjs Question and Answer</h2>
      <div className="question-container">
        <div>
          <h2>How useState() work?</h2>
          <p>
            we can use hooks only in functional component. Basically, useState
            is a special function that return an array of two entries. one is
            stored value, it is state and another one is a function. we can
            update the state value using that function.useState take initial
            state as an argument. we can only call useState at top level and can
            not call it inside loops, conditions, or nested functions.
          </p>
        </div>
        <div>
          <h2>Props VS State</h2>
          <strong>Props : </strong>
          <p>
            we can not change the props. props are read-only and
            immutable. using props, we can pass data from one to another
            components and It's make components reusable.
          </p>
          <strong>State : </strong>
          <p>
            State changes asynchronously and it is mutable. It holds data about
            the components. We can not access state inside child components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QnA;
