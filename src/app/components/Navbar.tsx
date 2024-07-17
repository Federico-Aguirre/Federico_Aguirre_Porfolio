"use client"

import navbarStyle from "@/base/navbar.module.scss"
import BackgroundChange from "./BackgroundChange"
import { contextStore } from "@/store/Context"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import Hamburguer from "./Hamburguer"

const Navbar = () => {
  const { sectionVisible } = contextStore()
  const { darkMode } = contextStore()
  let toggleClass = darkMode ? "darkModeLetterClass" : "brightModeLetterClass";

  const showAnimation = {
    initial: { 
      opacity: 0, 
      height: 100 
    },
    animate: { 
      opacity: 1, 
      height: 50,
      transition: {
        delay: .5,
        duration: .3,
      } 
    }
}

  return (
    <header className={`${navbarStyle.navbar} ${toggleClass}`}>
      <motion.nav variants={showAnimation} initial="initial" animate="animate">
        <div>
          <motion.div className={navbarStyle.navbar__homeLink} whileHover={{ scale: 1.2 }}>
            <Link to={"home"} smooth={true} offset={-40} duration={500} style={{color: sectionVisible.sectionVisibleValue == "home" && "hsl(194, 85%, 62%)"}}>{"home"}</Link>
          </motion.div>
          <Hamburguer />
          <motion.div className={navbarStyle.navbar__projectLink} whileHover={{ scale: 1.2 }}>
            <Link to={"project"} smooth={true} offset={-40} duration={500} style={{color: sectionVisible.sectionVisibleValue == "project" && "hsl(194, 85%, 62%)"}}>{"project"}</Link>
          </motion.div>
          <motion.div className={navbarStyle.navbar__aboutLink} whileHover={{ scale: 1.2 }}>
            <Link to={"about"} smooth={true} offset={-40} duration={500} style={{color: sectionVisible.sectionVisibleValue == "about" && "hsl(194, 85%, 62%)"}}>{"about"}</Link>
          </motion.div>
          <motion.div className={navbarStyle.navbar__contactLink} whileHover={{ scale: 1.2 }}>
            <Link to={"contact"} smooth={true} offset={-40} duration={500} style={{color: sectionVisible.sectionVisibleValue == "contact" && "hsl(194, 85%, 62%)"}}>{"contact"}</Link>
          </motion.div>
          <BackgroundChange />
        </div>
      </motion.nav>
    </header>
  )
}

export default Navbar;