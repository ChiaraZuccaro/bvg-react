import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export const Video = ({ videoContent, type, waiting }) => {
    const [ visible, setVisible ] = useState(false)

    setTimeout(() => {
        setVisible(true);
    }, waiting * 10)


    return (
        <li className={`${styles.GamingCard} ${visible ? styles.Visible : ""}`}>
            <Link to={type === "FPS" ? "/gallery/apex-legends" : ""}>
                <div className={styles.Hover}>                    
                    <div className={styles.Overlay}></div>                    
                    <h3>{type}</h3>
                </div>
                <video id={styles.Video} autoPlay muted loop>
                    <source src={videoContent} type="video/mp4" />
                </video>
            </Link>
        </li>
    )
}