import React from "react";

const Char = (props) => {
  this.style = {
    display: "inlineBlock",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };

  return (
    <div style={this.style} onClick={props.click}>
      {props.letter}
    </div>
  );
};

export default Char;
