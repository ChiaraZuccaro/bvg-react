import styles from "./styles.module.scss";
import { useState } from "react";

import logo30x30 from "./Loghi/logo30x30.png";
import logo50x50 from "./Loghi/logo50x50.png";
import logo70x70 from "./Loghi/logo70x70.png";
import logo100x100 from "./Loghi/logo100x100.png";

import search13x13 from "./Loghi/search13x13.png";
import search16x16 from "./Loghi/search16x16.png";
import search18x18 from "./Loghi/search18x18.png";
import search22x22 from "./Loghi/search22x22.png";
import { Link, useNavigate } from "react-router-dom";

export const Header = (props) => {
  const [searchG, setSearchG] = useState("");
  const goGallery = useNavigate();

  const searching = (event) => {
    const value = event.target.value;

    goGallery("/gallery");
    setSearchG(value);
    props.searching(value);
  };

  return (
    <header>
      <div className={styles.Title}>
        <picture className={styles.Picture} id="top">
          <source media="(min-width:1000px)" srcSet={logo100x100} />
          <source media="(min-width:600px)" srcSet={logo70x70} />
          <source media="(min-width:400px)" srcSet={logo50x50} />
          <img src={logo30x30} alt="logo" />
        </picture>
        <Link to={"/"}>
          <h1>BestViewGame</h1>
        </Link>
      </div>
      <div className={styles.Search}>
        <input
          type="text"
          placeholder="search a game ..."
          onChange={searching}
          value={searchG}
        />
        <picture className={styles.SearchPicture}>
          <source media="(min-width:1000px)" srcSet={search22x22} />
          <source media="(min-width:600px)" srcSet={search18x18} />
          <source media="(min-width:400px)" srcSet={search16x16} />
          <img src={search13x13} alt="logo" />
        </picture>
      </div>
    </header>
  );
};
