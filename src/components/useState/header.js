import React, { useState } from "react";

const Header = props => {
  const [input, setInput] = useState("");

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onAddClick = () => {
    // alert(input);
    if (!input) {
      alert("Empty value!");
    }
    props.addName(input);
    setInput("");
  };
  return (
    <div className="header-container">
      Name:
      <input className="header-input" value={input} onChange={onInputChange} />
      <button className="header-button" onClick={onAddClick}>
        ADD
      </button>
    </div>
  );
};
export default Header;
