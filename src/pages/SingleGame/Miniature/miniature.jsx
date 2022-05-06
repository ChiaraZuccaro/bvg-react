import { useState } from "react"
import styles from "./styles.module.scss"

export const Miniature = ({ imageMin, waiting }) => {
    const [ isActive, setIsActive ] = useState(false)

    setTimeout(() => {
        setIsActive(true)
    }, waiting)

    return (
        <img className={`${styles.Grid} ${ isActive ? styles.Display : ""}`} 
        src={imageMin} 
        alt="miniature gallery" />
    )
}