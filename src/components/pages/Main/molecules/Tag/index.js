import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Tag = ({ name }) => {
  return (
    <div className={styles.container}>
      <span>{name}</span>
    </div>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
