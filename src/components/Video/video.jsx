import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export const Video = ({ videoContent, type, waiting }) => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  setTimeout(() => {
    setVisible(true);
  }, waiting * 5);

  console.log(videoContent.url);

  return (
    <li className={`${styles.GamingCard} ${visible ? styles.Visible : ""}`}>
      <a
        href={`${videoContent.url == "" ? "" : videoContent.url}`}
        target="_blank"
      >
        <div className={styles.Hover}>
          <div className={styles.Overlay}></div>
          <h3>{type}</h3>
        </div>
        <video className={styles.Video} autoPlay muted loop>
          <source src={videoContent.video} type="video/mp4" />
        </video>
      </a>
    </li>
  );
};
