import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import dropImg from "../chevron.png";
import closeImg from "../cancel.png";

import styles from "./styles.module.scss";

export const SideBar = ({ text }) => {
  const [sideActive, setSideActive] = useState(false);
  const [detailsActive, setDetailsActive] = useState(false);
  const { hash } = useLocation();
  const paragraphs = text.split("/n");

  const changeHash = (idElement) => {
    const element = document.getElementById(idElement);
    hash.replace(idElement, "");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const drop = () => {
    setSideActive(true);
  };

  const close = () => {
    setSideActive(false);
    setDetailsActive(false);
  };

  return (
    <>
      <div className={styles.Icon}>
        <img
          className={sideActive ? styles.Hide : styles.Show}
          src={dropImg}
          alt="drop menu"
          onClick={drop}
        />

        <img
          className={sideActive ? styles.Show : styles.Hide}
          src={closeImg}
          alt="close menu"
          onClick={close}
        />
      </div>

      <div
        className={`${styles.Wrapper} ${sideActive ? styles.WrapHigh : ""} ${
          detailsActive ? styles.WrapMoreHigh : ""
        }`}
      >
        <div
          className={`${styles.SideBar} ${sideActive ? styles.Display : ""} ${
            detailsActive ? styles.SideBarHigh : ""
          }`}
        >
          <div
            className={`${text !== "" ? styles.Quotes : styles.Hide} ${
              sideActive ? styles.QuotesDisplay : ""
            } ${detailsActive ? styles.QuotesTop : ""}`}
          >
            <h5>About:</h5>
            <p className={detailsActive ? styles.Hide : ""}>
              " {text.split(" ").splice(0, 15).join(" ")} ..."
            </p>
            <div className={detailsActive ? styles.Paragraphs : styles.Hide}>
              "{paragraphs && paragraphs.map((paragraph) => <p>{paragraph}</p>)}
              "
            </div>
            <span
              className={detailsActive ? styles.Hide : ""}
              onClick={() => setDetailsActive(true)}
            >
              more
            </span>
            <span
              className={detailsActive ? "" : styles.Hide}
              onClick={() => setDetailsActive(false)}
            >
              close
            </span>
          </div>
          <div
            className={`${detailsActive ? styles.Hide : styles.NormalButton} ${
              sideActive ? styles.ButtonFlex : ""
            }`}
          >
            <Link to="/gallery">Back to gallery</Link>
            <a onClick={() => changeHash("top")}>Go top</a>
          </div>
        </div>
      </div>
    </>
  );
};
