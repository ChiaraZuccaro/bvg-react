import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import dropImg from "../chevron.png";
import closeImg from "../cancel.png";

import styles from "./styles.module.scss";

export const SideBar = ({ text }) => {
  const [sideActive, setSideActive] = useState(false);
  const { hash } = useLocation();

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

      <div className={`${styles.Wrapper} ${sideActive ? styles.WrapHigh : ""}`}>
        <div
          className={`${styles.SideBar} ${sideActive ? styles.Display : ""}`}
        >
          <p
            className={`${text !== "" ? styles.Quotes : styles.Hide} 
                ${sideActive ? styles.QuotesDisplay : ""}`}
          >
            " {text} "
          </p>
          <div
            className={`${styles.NormalButton} ${
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
