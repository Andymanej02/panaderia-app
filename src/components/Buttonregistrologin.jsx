import React from "react";

const Buttonregistrologin = ({ fnRegistro, label }) => {
  return (
    <button onClick={fnRegistro} className="registro-button">
      {label}
    </button>
  );
};

export default Buttonregistrologin;
