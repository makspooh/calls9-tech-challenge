/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";

import { toastSelector } from "../../../store/selectors";
import { removeToastByIndex } from "../../../store/slices/toastSlice";

import styles from "./index.module.scss";

const ToastContainer = () => {
  const { toasts } = useSelector(toastSelector);
  const dispatch = useDispatch();

  const handleDismissToast = (index) => {
    dispatch(removeToastByIndex(index));
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timeout = setTimeout(() => {
        dispatch(removeToastByIndex(0));
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [toasts, dispatch]);

  return (
    <div className={styles.container}>
      {toasts.map((toast, index) => (
        <div
          key={nanoid()}
          className={classNames(styles.toast, styles[toast.type])}
        >
          {toast.message}

          <div
            className={styles.dismiss}
            onClick={() => handleDismissToast(index)}
          >
            <div className={styles.crossIcon}>
              <div className={classNames(styles.line, styles.line_1)} />
              <div className={classNames(styles.line, styles.line_2)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
