import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./index.module.scss";

const CustomLink = ({ to, className, children }) => {
  return (
    <NavLink to={to} className={() => classNames(styles.link, className)}>
      {children}
    </NavLink>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
};

CustomLink.defaultProps = {
  to: "",
  className: "",
};

export default CustomLink;
