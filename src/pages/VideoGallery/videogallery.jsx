import styles from "./styles.module.scss";
import { apex, funny } from "../../game-library";
import { Video } from "../../components/Video/video";
import { SideBar } from "../SingleGame/SideBar/sidebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const VideoGallery = ({ renderGame }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("top", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash]);

  return (
    <div className={styles.VideoGallery}>
      <h2>Apex Legends</h2>
      <SideBar text={apex.description} />
      <ul className={styles.GridVideo}>
        {renderGame.includes("apex legends")
          ? apex.clips.map((vid, index) => (
              <Video
                key={index}
                videoContent={vid}
                type={"Check it out"}
                waiting={50 * index}
              />
            ))
          : renderGame.includes("funny")
          ? funny.map((vid, index) => (
              <Video
                key={index}
                videoContent={vid}
                type={"Check it out"}
                waiting={50 * index}
              />
            ))
          : "Error 404"}
      </ul>
    </div>
  );
};
