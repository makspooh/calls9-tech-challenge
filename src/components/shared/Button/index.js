import React from "react";
import PropTypes from "prop-types";

import LoadingIndicator from "../LoadingIndicator";

const Button = ({ label, type, isDisabled, isLoading, onClick }) => {
  return (
    <button type={type} disabled={isDisabled} onClick={onClick}>
      {isLoading ? <LoadingIndicator /> : <span>{label}</span>}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  isDisabled: false,
  isLoading: false,
  onClick: () => {},
};

export default Button;
