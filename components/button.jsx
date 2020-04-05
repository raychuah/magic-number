import React from "react";

const Button = ({ children, handleClick, color }) => {
  return (
    <>
      <button className={`button-extend button-${color}`} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
