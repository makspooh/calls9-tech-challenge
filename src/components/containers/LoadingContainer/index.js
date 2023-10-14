import React from "react";
import PropTypes from "prop-types";

import LoadingIndicator from "../../shared/LoadingIndicator";

import styles from "./index.module.scss";

const LoadingContainer = ({ isLoading, width, height, children }) => {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <LoadingIndicator
          color="#e0662e"
          secondaryColor="#e0662e"
          width={width}
          height={height}
        />
      </div>
    );
  }

  return children;
};

LoadingContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

LoadingContainer.defaultProps = {
  width: 40,
  height: 40,
};

export default LoadingContainer;
