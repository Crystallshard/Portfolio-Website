import { StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby";

import * as React from "react"
import ContactMenu from "../components/contactMenu/contactMenu"
import NavigationLinks from "../components/navigationLinks/navigationLinks"
import {
  main, 
  Stars,
  contentContainer,
  content,
  welcome
} from "./indexStyles.module.css"

const IndexPage = () => {
  const STARSSIZE = 100;
  return (
    <main className={main}>
      <Link className={Stars} to="#">
        <StaticImage
            alt="Star"
            src="D:\Portfolio\portfolio\src\images\Stars.png"
            placeholder="blurred"
            layout="fixed"
            width={STARSSIZE}
            height={STARSSIZE}
          />
        </Link>
        
      
      <NavigationLinks />
      <ContactMenu />
      <div className={contentContainer}>
          <h3 className={welcome}>WELCOM, MY NAME IS</h3>
          <h1 className={content}>KISHON ENNIS-NORMAN</h1>
        </div>
    </main>
  )
}

export default IndexPage


