import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { topStoriesSelector } from "../../../store/selectors";
import initTopStories from "../../../store/services/stories";

import Footer from "../../base/Footer";
import Header from "../../base/Header";
import LoadingContainer from "../../containers/LoadingContainer";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(topStoriesSelector);

  useEffect(() => {
    const initPageData = async () => {
      await dispatch(initTopStories());
    };

    initPageData();
  }, []);

  return (
    <LoadingContainer isLoading={isLoading}>
      <main className={styles.container}>
        <Header />

        <section className={styles.content}>{children}</section>

        <Footer />
      </main>
    </LoadingContainer>
  );
};

export default MainLayout;
