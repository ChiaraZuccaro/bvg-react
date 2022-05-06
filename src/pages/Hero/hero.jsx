import styles from "./styles.module.scss"

import heroSM from "./img/hero-sm0000.png"
import heroM from "./img/hero-m0000.png"
import heroT from "./img/hero-d-s0000.png"
import heroD from "./img/hero-d0000.png"

import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <div className="wrapper">
            <div className={styles.Hero}>                
                <picture>
                    <source media="(min-width: 1279px)" srcSet={heroD} />
                    <source media="(min-width: 900px)" srcSet={heroT} />
                    <source media="(min-width: 500px)" srcSet={heroM} />
                    <img src={heroSM} alt="home"/>
                </picture>
                <div className= {styles.HomeFlex}>
                    <h2>LIVE GAMES IN DETAILS</h2>
                    <Link to="/gallery">
                        EXPLORE
                    </Link>
                </div>
            </div>
        </div>
    )
}