import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

const TextArea = ({
  value,
  valueKey,
  label,
  placeholder,
  className,
  id,
  onChange,
}) => {
  const internalId = nanoid();

  const handleChange = ({ target: { value: newValue } }) => {
    onChange(newValue, valueKey);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <label htmlFor={id || internalId} className={styles.label}>
        {label}
      </label>

      <textarea
        id={id || internalId}
        className={styles.field}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={4}
      />
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  valueKey: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  valueKey: "",
  label: "",
  placeholder: "",
  className: "",
  id: "",
  onChange: () => {},
};

export default TextArea;
