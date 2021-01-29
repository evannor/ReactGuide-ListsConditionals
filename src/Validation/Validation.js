import React from "react";

const Validation = (props) => {
  const output = props.length > 5 ? "Text long enough" : "Text too short";
  return <div>Validate! {output} </div>;
};

export default Validation;
