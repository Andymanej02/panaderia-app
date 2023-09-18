import React from "react";
import '../styles/Login.css';

const ButtonLogin = ({ fnInicioSession, label }) => {
  const buttonStyles = {
    backgroundColor: "#FFA500", 
    color: "#ffffff", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px 20px", 
    fontSize: "20px", 
    fontFamily: "'Pacifico', cursive", 
    textTransform: "uppercase", 
    letterSpacing: "1px", 
    transition: "background-color 0.3s",
  };

  const buttonHoverStyles = {
    backgroundColor: "#D2691E", 
  };

  return (
    <button
      className="btn"
      style={buttonStyles}
      onClick={fnInicioSession}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = buttonHoverStyles.backgroundColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = buttonStyles.backgroundColor;
      }}
    >
      {label}
    </button>
  );
};

export default ButtonLogin;

