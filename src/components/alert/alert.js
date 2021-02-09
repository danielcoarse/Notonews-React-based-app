import React from "react";

const Alert = (props) => {
  const { alertType, text } = props;

  return (
    <div className="container">
      <div className={`alert ${alertType}`} role="alert">
        <strong>{text}</strong>
      </div>
    </div>
  );
};

export default Alert;
