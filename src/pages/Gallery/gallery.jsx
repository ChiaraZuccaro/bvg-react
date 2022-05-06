import styles from "./styles.module.scss"

import poster from "../../apexclip.mp4"

import {games } from "../../game-library"
import { Filtered } from "../../components/Filtered/filter"
import { useEffect, useState } from "react"
import { Video } from "../../components/Video/video"

export const Gallery = ({ searchGame }) => {
    const [ searchGallery, setSearchGallery] = useState(games);

    useEffect(() => {
        const filterGame = games.filter((game) => game.name.toLowerCase().includes(searchGame));
        setSearchGallery(filterGame);
    }, [searchGame]);

    return (
        <div className={styles.All}>
        <h2>Photography</h2>
            <ul className={searchGame === undefined ? styles.Gallery : styles.Hide}>
                {
                    games.map((game, index) => {
                        return (
                        <li key={index}>
                            <Filtered title={game.name} 
                            image={game.filter[Math.floor(Math.random() * game.filter.length)]}
                            waiting={400 * index}/>
                        </li>
                    )})
                }
            </ul>


            {/*            SEARCH       GAME        */}

            <ul className={searchGame === undefined ? styles.Hide : styles.Gallery }>
                {
                    searchGallery.map((game, index) => (
                        <li key={index}>                            
                            <Filtered title={game.name} 
                            image={game.filter[Math.floor(Math.random() * game.filter.length)]}
                            waiting={400 * index}/>
                        </li>
                    ))
                }
            </ul>
                
            <h2>Gaming</h2>
            <ul className={styles.GamingSection}>
                <Video videoContent={poster} type={"FPS"}/>
            </ul>


        </div>
    )
}