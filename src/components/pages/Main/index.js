/* eslint-disable no-console */
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { topStoriesSelector } from "../../../store/selectors";
import { validateComment } from "../../../utils/validation";
import { addToast } from "../../../store/slices/toastSlice";
import api from "../../../apiSingleton";

import Tag from "./molecules/Tag";
import TextArea from "../../shared/TextArea";
import Button from "../../shared/Button";

import play from "../../../assets/images/play.png";
import play2x from "../../../assets/images/play@2x.png";
import web from "../../../assets/images/web.png";
import web2x from "../../../assets/images/web@2x.png";

import styles from "./index.module.scss";

const TAGS = [{ name: "gaming" }, { name: "wow" }];

const MainPage = () => {
  const { stories } = useSelector(topStoriesSelector);

  const [inputs, setInputs] = useState({ comment: { value: "", target: "" } });

  const commentRef = useRef(null);
  const dispatch = useDispatch();

  const handleStoryClick = (id) => {
    setInputs((prev) => ({
      ...prev,
      comment: { ...prev.comment, target: id },
    }));

    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      handleStoryClick(id);
    }
  };

  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({
      ...prev,
      [valueKey]: { ...prev[valueKey], value },
    }));
  };

  const showToast = (message, type) => {
    dispatch(
      addToast({
        message,
        type,
      }),
    );
  };

  const handlePostComment = (e) => {
    e.preventDefault();

    validateComment({
      data: inputs.comment,
      onSuccess: () => {
        const payload = {
          by: "Just Me",
          parent: inputs.comment.target,
          text: inputs.comment.value,
          time: new Date().getTime(),
          type: "comment",
        };

        const response = api.stories.commentTop(payload);

        console.log(response);

        showToast("Success! Please check browser console", "success");
      },
      onError: (errors) => showToast(errors.value || errors.target, "error"),
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>News</h1>

        <div className={styles.stories}>
          {stories.map((story, index) => {
            const { id } = story;
            const imageClass = `image-${(index % 4) + 1}`;

            return (
              <div
                key={id}
                role="button"
                tabIndex={0}
                className={styles.story}
                onClick={() => handleStoryClick(id)}
                onTouchStart={() => handleStoryClick(id)}
                onKeyDown={(e) => handleKeyDown(e, id)}
              >
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

                  <div className={styles.story_tags}>
                    {TAGS.map(({ name }) => (
                      <Tag key={nanoid()} name={name} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <form
          ref={commentRef}
          className={styles.comment}
          onSubmit={handlePostComment}
        >
          <TextArea
            value={inputs.comment.value}
            valueKey="comment"
            label="Comment"
            placeholder={`${inputs.comment.target} story comment`}
            onChange={handleInputChange}
          />

          <Button type="submit" label="Post comment" />
        </form>

        <div className={styles.findMore}>
          <picture>
            <source media="(min-width: 992px)" srcSet={web2x} />
            <img src={web} alt="play" className={styles.web} />
          </picture>

          <p className={styles.findMore_text}>
            Find out more at{" "}
            <a
              href="https://people.com"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              www.people.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
