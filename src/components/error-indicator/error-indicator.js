import React from "react";
import "./error-indicator.css";
import errorImg from "./error.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-indicator__icon" src={errorImg} alt="" />
      <h4 className="error-indicator__description_header">
        Something went wrong.
      </h4>
      <span className="error-indicator__description_content">
        We will correct the arrangement shortly.
      </span>
    </div>
  );
};

export default ErrorIndicator;
