import { useEffect, useState } from "react";
import { GET } from "../../utils/instafetch";
import like from "../../utils/32x32/love.png";
import link from "../../utils/32x32/web-link.png";
import styles from "./styles.module.scss";

export const FullImage = ({ imageInfo, setFull }) => {
  const [imageData, setImageData] = useState();
  // useEffect(() => {
  //   GET(imageInfo.shortcode).then((data) => setImageData(data.data));
  // }, []);

  // console.log(
  //   imageData &&
  //     imageData.shortcode_media.edge_media_to_caption.edges[0].node.text
  //       .split("#")
  //       .splice(0, 1)
  // );

  return (
    <div className={styles.FullWrap}>
      <div className={styles.OverLay}></div>
      <div className={styles.FullImage}>
        <div className={styles.TopFullWrap}>
          <h3>
            {imageData &&
              imageData.shortcode_media.edge_media_to_caption.edges[0].node.text
                .split("#")
                .splice(0, 1)}
          </h3>
          <p onClick={() => setFull("")}>X</p>
        </div>
        <img src={imageInfo.image} alt="full" />
        <div className={styles.BottomFullWrap}>
          <div className={styles.BottomFull}>
            <div className={styles.InstagramLink}>
              <img src={link} alt="link" />
              <a href="https://www.instagram.com/bestviewgame/" target="_blank">
                Visit my IG profile
              </a>
            </div>
            {imageData && (
              <div className={styles.InstagramData}>
                <img src={like} alt="likes" />
                <p>{imageData.shortcode_media.edge_media_preview_like.count}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
