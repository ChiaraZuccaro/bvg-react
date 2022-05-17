import styles from "./styles.module.scss";

import { games } from "../../game-library";
import { Miniature } from "./Miniature/miniature";
import { useState, useEffect } from "react";
import { SideBar } from "./SideBar/sidebar";
import { FullImage } from "../../components/FullImage/fullimage";
import { useLocation } from "react-router-dom";

export const SingleGame = ({ renderGame }) => {
  const { pathname, hash } = useLocation();
  const objGame = games.filter((game) =>
    game.name.toLowerCase().includes(renderGame)
  )[0];
  const [fullImage, setFullImage] = useState("");

  const reachFull = (index) => {
    setFullImage(objGame.all[index]);
  };

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("top", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash]);

  return (
    <div className={styles.GameSpecified}>
      <>
        <SideBar text={objGame.description} />

        {fullImage !== "" && (
          <FullImage imageInfo={fullImage} setFull={setFullImage} />
        )}

        <h2>{objGame.name}</h2>

        <ul className={styles.MinGrid}>
          {objGame.miniature.map((min, i) => (
            <li key={i} id={String(i)} onClick={() => reachFull(i)}>
              <Miniature imageMin={min} waiting={200 * i} />
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};
