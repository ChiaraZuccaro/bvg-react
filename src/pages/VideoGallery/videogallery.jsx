import styles from "./styles.module.scss"
import {apex} from "../../game-library"
import { Video } from "../../components/Video/video"

export const VideoGallery = () => {
    return (
        <div className={styles.VideoGallery}>
            <ul className={styles.GridVideo}>
                {
                    apex.map((vid, index) => (
                        <Video videoContent={vid} type={"Check it out"} waiting={150 * index}/>
                    ))
                }
            </ul>
        </div>
    )
}