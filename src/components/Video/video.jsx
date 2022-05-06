import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export const Video = ({ videoContent, type }) => {
    return (
        <li className={styles.GamingCard}>
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