
import React from 'react';
import './ListItem.css'



const Button = ({ type = "button", className, onClick, children, ...props }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;