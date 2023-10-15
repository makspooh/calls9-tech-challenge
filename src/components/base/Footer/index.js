import React, { Fragment } from "react";

import { BOTTOM_NAVIGATION } from "../../../utils/constants/navigation";

import CustomLink from "../../shared/CustomLink";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        {Object.keys(BOTTOM_NAVIGATION).map((routeKey, index) => {
          const { path, label } = BOTTOM_NAVIGATION[routeKey];

          return (
            <Fragment key={label}>
              {index !== 0 && <span className={styles.separator}>|</span>}

              <CustomLink to={path} className={styles.link}>
                <span>{label}</span>
              </CustomLink>
            </Fragment>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
