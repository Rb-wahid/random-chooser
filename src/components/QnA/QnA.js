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
            We can use hooks only in functional component. Basically, useState
            is a special function that returns an array of two entries. One is
            stored value, it is state and another one is a function. We can
            update the state using that function. useState takes initial state
            as an argument. We can only call useState at top level and can not
            call it inside loops, conditions, or nested functions.
          </p>
        </div>
        <div>
          <h2>Props VS State</h2>
          <strong>Props : </strong>
          <p>
            We cannot change the props. Props are read-only and immutable. Using
            props, we can pass data from one to another components and It's made
            components reusable.
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
