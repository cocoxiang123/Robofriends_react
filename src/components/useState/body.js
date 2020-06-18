import React from "react";
import "./body.css";

const Body = props => {
  const handleDelete = event => {
    let num = event.target.getAttribute("id");
    props.deleteName(num);
  };

  const renderData = props.names.map((name, i) => (
    <li key={i}>
      {i + 1}
      {name}{" "}
      <button id={i} onClick={handleDelete}>
        X
      </button>
    </li>
  ));

  return (
    <div style={{ padding: 20, height: 200 }}>
      <ul>{renderData}</ul>
    </div>
  );
};

export default Body;
