import styles from "./styles.module.scss";

import { games } from "../../game-library";
import { Filtered } from "../../components/Filtered/filter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Gallery = ({ searchGame }) => {
  const [searchGallery, setSearchGallery] = useState(games);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const filterGame = games.filter((game) =>
      game.name.toLowerCase().includes(searchGame)
    );
    setSearchGallery(filterGame);
  }, [searchGame]);

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
    <div className={styles.All}>
      <blockquote>" Where gaming meet photography "</blockquote>
      <ul className={searchGame === undefined ? styles.Gallery : styles.Hide}>
        {games.map((game, index) => {
          return (
            <li key={index}>
              <Filtered
                title={game.name}
                image={
                  game.filter[Math.floor(Math.random() * game.filter.length)]
                }
                waiting={400 * index}
              />
            </li>
          );
        })}
      </ul>

      {/*            SEARCH       GAME        */}

      <ul className={searchGame === undefined ? styles.Hide : styles.Gallery}>
        {searchGallery.map((game, index) => (
          <li key={index}>
            <Filtered
              title={game.name}
              image={
                game.filter[Math.floor(Math.random() * game.filter.length)]
              }
              waiting={400 * index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
