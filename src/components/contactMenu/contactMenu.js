import * as React from "react"
import {
    contactMenuContainer,
    contactMenuItem
} from "../contactMenu/ContactMenuStyles.module.css"
import { StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby";

const ContactMenu = () => {
    const IMGSIZE = 45;

    return (
        <>
            <ul className={contactMenuContainer}>
                <li className={contactMenuItem}>
                    <Link to="#">
                        <StaticImage
                            alt="Star"
                            src="D:\Portfolio\portfolio\src\images\email.png"
                            placeholder="blurred"
                            layout="fixed"
                            width={IMGSIZE}
                            height={IMGSIZE}
                        />
                    </Link>
                </li>
                <li className={contactMenuItem}>
                    <Link to="#">
                        <StaticImage
                            alt="Star"
                            src="D:\Portfolio\portfolio\src\images\gatsby.png"
                            placeholder="blurred"
                            layout="fixed"
                            width={IMGSIZE}
                            height={IMGSIZE}
                        />
                    </Link>
                </li>
                <li className={contactMenuItem}>
                <Link to="#">
                    <StaticImage
                        alt="Star"
                        src="D:\Portfolio\portfolio\src\images\linkedin.png"
                        placeholder="blurred"
                        layout="fixed"
                        width={IMGSIZE}
                        height={IMGSIZE}
                    />
                </Link>
                </li>
            </ul>
        </>
    )
}

export default ContactMenu;