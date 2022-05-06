import styles from "./styles.module.scss"

import { games } from "../../game-library"
import { Miniature } from "./Miniature/miniature"
import { useState } from "react"

export const SingleGame = ({ renderGame }) => {
    const objGame = games.filter((game) => game.name.toLowerCase().includes(renderGame))[0]
    const [fullVisibile, setFullVisible] = useState(false);
    const [fullImage, setFullImage] = useState("");

    const reachFull = (index) => {
        setFullVisible(true);
        setFullImage(objGame.all[index]);
    }

    return(
        <div className={styles.GameSpecified}>
            <>            
                <div className={ fullVisibile ? styles.OverLay : "hidden"}></div>
                <div className={ fullVisibile ? styles.FullImage : "hidden"}>
                    {
                        fullImage !== ""  && (
                        <img src={fullImage} alt="full image" />
                        )
                    }
                </div>

                <h2 id="top">{objGame.name}</h2>

                <ul className={styles.MinGrid}>                
                    {
                        objGame.miniature.map((min, i) => (
                            <li key={i} onClick={() => reachFull(i)}>
                                <Miniature imageMin={min} waiting={200 * i}/>
                            </li>
                        ))
                    }
                </ul>
            </>                
        </div>
    )
}