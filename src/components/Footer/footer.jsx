import "./foot.css";

import youtube32 from "./32x32/youtube32.png"
import instagram32 from "./32x32/instagram32.png"
import tiktok32 from "./32x32/tik-tok32.png"
import discord32 from "./32x32/discord32.png"
import twitch32 from "./32x32/twitch32.png"
import tumblr32 from "./32x32/tumblr32.png"

import youtube64 from "./64x64/youtube64.png"
import instagram64 from "./64x64/instagram64.png"
import tiktok64 from "./64x64/tik-tok64.png"
import discord64 from "./64x64/discord64.png"
import twitch64 from "./64x64/twitch64.png"
import tumblr64 from "./64x64/tumblr64.png"

export const Footer = () => {
    return (
        <footer>
            <p>Suggest me new game to play by any social you want!</p>
            <div className="social">
                <a href="https://www.instagram.com/bestviewgame/" target="_blank">
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={instagram64} />
                        <img src={instagram32} alt="instagram" />
                    </picture>
                </a>
                <a href="https://www.youtube.com/channel/UCfiUW9Uyb5WHrFe-6cbog2Q" target="_blank">
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={youtube64} />
                        <img src={youtube32} alt="youtube" />
                    </picture>
                </a>
                <a href="https://www.tiktok.com/@bestviewgame" target="_blank">
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={tiktok64} />                        
                        <img src={tiktok32} alt="tiktok" />
                    </picture>
                </a>
                <a href="https://discord.gg/6vHmwPuSp3" target="_blank">
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={discord64} />
                        <img src={discord32} alt="discord" />
                    </picture>
                </a>
                <a href="https://www.twitch.tv/bestviewgame" target="_blank">
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={twitch64} />
                        <img src={twitch32} alt="twitch" />
                    </picture>
                </a>
                <a href="https://bestviewgame.tumblr.com/" target="_blank">
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={tumblr64} />                        
                        <img src={tumblr32} alt="tumblr" />
                    </picture>
                </a>
            </div>
            <p>Website made by <a href="https://www.linkedin.com/in/chiara-zuccaro/" target="_blank">Chiara Zuccaro</a></p>
        </footer>
    )
}