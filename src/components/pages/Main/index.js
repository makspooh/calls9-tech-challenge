import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

import topStoriesSelector from "../../../store/selectors/stories";

import play from "../../../assets/images/play.png";
import play2x from "../../../assets/images/play@2x.png";

import styles from "./index.module.scss";

const MainPage = () => {
  const { stories } = useSelector(topStoriesSelector);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>News</h1>

        <div className={styles.stories}>
          {stories.map((story, index) => {
            const { id } = story;
            const imageClass = `image-${(index % 4) + 1}`;

            return (
              <div key={id} className={styles.story}>
                <div className={classNames(styles.image, styles[imageClass])}>
                  <picture>
                    <source media="(min-width: 992px)" srcSet={play2x} />
                    <img src={play} alt="play" className={styles.play} />
                  </picture>
                </div>

                <div className={styles.story_content}>
                  <div className={styles.story_text}>
                    <p className={styles.story_title}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam id suscipit nisi. Vestibulum dignissim ac nisi eu
                      lacinia. Aenean vitae convallis nunc. Sed eget justo quis
                      libero.
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
