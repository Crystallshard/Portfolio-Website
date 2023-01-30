import { StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby";

import * as React from "react"
import ContactMenu from "../components/contactMenu/contactMenu"
import NavigationLinks from "../components/navigationLinks/navigationLinks"
import Footer from "../components/footer/footer";
import {
  main, 
  Stars,
  contentContainer,
  firstName,
  welcome,
  aboutContainer,
  aboutText,
  about,
  aboutList,
  portContainer
} from "./indexStyles.module.css"

const IndexPage = () => {

  const STARSSIZE = 100;
  const PORTSIZE = 350;

  
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
        
      <Footer />
      <NavigationLinks />
      <ContactMenu />
      
      <div className={contentContainer}>
          <h3 className={welcome}>WELCOME, MY NAME IS</h3>
          <h1 className={firstName}>KISHON ENNIS-NORMAN</h1>
      </div>

      <div className={aboutContainer}>
        <h1 className={about}>ABOUT</h1>
        <ul className={aboutList}>
          <li>
            <h1 className={aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
          </li>
          <li>
            <div className={portContainer}>
              <StaticImage
                alt="Star"
                src="D:\Portfolio\portfolio\src\images\git-logo.png"
                placeholder="blurred"
                layout="fixed"
                width={PORTSIZE}
                height={PORTSIZE}
              />
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default IndexPage


