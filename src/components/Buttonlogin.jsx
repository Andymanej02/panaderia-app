import React from "react";
import '../styles/Login.css';

const ButtonLogin = ({ fnInicioSession, label }) => {
  const buttonStyles = {
    backgroundColor: "#FFA500", /* Color naranja (alusivo a la panadería) */
    color: "#ffffff", /* Texto en blanco */
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px 20px", /* Tamaño del botón reducido */
    fontSize: "20px", /* Tamaño de fuente reducido */
    fontFamily: "'Pacifico', cursive", /* Fuente personalizada */
    textTransform: "uppercase", /* Texto en mayúsculas */
    letterSpacing: "1px", /* Espaciado entre letras */
    transition: "background-color 0.3s",
  };

  const buttonHoverStyles = {
    backgroundColor: "#D2691E", /* Color marrón al hacer hover (alusivo a la panadería) */
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

