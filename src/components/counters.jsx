import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
  console.log("Counters - Rendered");

  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={() => onDelete(counter.id)}
          onIncrement={() => onIncrement(counter)}
        >
          <h4>Counter #{counter.id}</h4>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
