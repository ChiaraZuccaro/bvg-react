import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Filtered = ({title, image, waiting}) => {
    const [ isActive, setIsActive ] = useState(false);

    setTimeout(() => {
        setIsActive(true)
    }, waiting)

    return(        
        <article className={`${styles.Filtered} ${isActive ? styles.Display : styles.Hide}`}>   
            <Link to={title.toLowerCase().split(" ").join("-")}>         
                <img src={image} alt="games miniatures"/>
                <h3>{title}</h3>
            </Link>
        </article>
    )
}