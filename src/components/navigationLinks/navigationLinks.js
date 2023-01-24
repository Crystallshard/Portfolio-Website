import * as React from "react"
import {
    NavigationLinksContainer,
    NavigationLinksItems,
    star
} from "../navigationLinks/NavigationLinksStyles.module.css"
import { StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby";

const NavigationLinks = () => {
    const STARSIZE = 25;

    return (
        <>
            <ul className={NavigationLinksContainer}>
                <li className={NavigationLinksItems}>
                    <div className={star}>
                        <StaticImage
                            alt="Star"
                            src="D:\Portfolio\portfolio\src\images\Star.png"
                            placeholder="blurred"
                            layout="fixed"
                            width={STARSIZE}
                            height={STARSIZE}
                        />
                    </div>
                    <Link to="#">
                        <p>ABOUT</p>
                    </Link>
                </li>
                <li className={NavigationLinksItems}>
                    <div className={star}>
                        <StaticImage
                            alt="Star"
                            src="D:\Portfolio\portfolio\src\images\Star.png"
                            placeholder="blurred"
                            layout="fixed"
                            width={STARSIZE}
                            height={STARSIZE}
                        />
                    </div>
                    <Link to="#">
                        <p>PROJECTS</p>
                    </Link>
                </li>
                <li className={NavigationLinksItems}>
                    <div className={star}>
                        <StaticImage
                            alt="Star"
                            src="D:\Portfolio\portfolio\src\images\Star.png"
                            placeholder="blurred"
                            layout="fixed"
                            width={STARSIZE}
                            height={STARSIZE}
                        />
                    </div>
                    <Link to="#">
                        <p>RESUME</p>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavigationLinks;