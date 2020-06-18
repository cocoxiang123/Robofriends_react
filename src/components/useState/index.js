import React, { useState } from "react";
import Body from "./body";
import Header from "./header";

function UseStateDemo() {
  const [names, setNames] = useState([]);

  function addName(name) {
    if (name) {
      let new_array = Array.from(names);
      new_array.push(name);
      setNames(new_array);
    }
  }

  const handleDelete = key => {
    let new_array2 = Array.from(names);
    new_array2.splice(key, 1);
    setNames(new_array2);
  };

  return (
    <div className="App">
      <Header addName={addName} names={names} />
      <Body names={names} deleteName={handleDelete} />
    </div>
  );
}

export default UseStateDemo;
