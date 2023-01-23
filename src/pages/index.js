import { StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby";

import * as React from "react"
import ContactMenu from "../components/contactMenu/contactMenu"
import NavigationLinks from "../components/navigationLinks/navigationLinks"
import {
  main, 
  Stars
} from "./indexStyles.module.css"

const IndexPage = () => {
  return (
    <main className={main}>
                    <Link className={Stars} to="#">
                        <StaticImage
                            alt="Star"
                            src="D:\Portfolio\portfolio\src\images\Stars.png"
                            placeholder="blurred"
                            layout="fixed"
                            width={50}
                            height={50}
                        />
                    </Link>

      <NavigationLinks />
      <ContactMenu />
     
    </main>
  )
}

export default IndexPage


