import React from "react";

function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default CounterOne;
