import styles from "./styles.module.scss";
import { apex } from "../../game-library";
import { Video } from "../../components/Video/video";
import { SideBar } from "../SingleGame/SideBar/sidebar";

export const VideoGallery = () => {
  return (
    <div className={styles.VideoGallery}>
      <h2>Apex Legends</h2>
      <SideBar text="" />
      <ul className={styles.GridVideo}>
        {apex.map((vid, index) => (
          <Video
            key={index}
            videoContent={vid}
            type={"Check it out"}
            waiting={150 * index}
          />
        ))}
      </ul>
    </div>
  );
};
