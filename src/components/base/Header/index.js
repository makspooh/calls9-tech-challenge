import React from "react";

import { TOP_NAVIGATION } from "../../../utils/constants/navigation";

import CustomLink from "../../shared/CustomLink";

import logo from "../../../assets/images/logo.png";
import logo2x from "../../../assets/images/logo@2x.png";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <CustomLink to="/">
        <picture>
          <source media="(min-width: 992px)" srcSet={logo2x} />
          <img src={logo} alt="logo" className={styles.logo} />
        </picture>
      </CustomLink>

      <nav className={styles.nav}>
        {Object.keys(TOP_NAVIGATION).map((routeKey) => {
          const { path, label } = TOP_NAVIGATION[routeKey];

          return (
            <CustomLink key={label} to={path} className={styles.link}>
              <span>{label}</span>
            </CustomLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
