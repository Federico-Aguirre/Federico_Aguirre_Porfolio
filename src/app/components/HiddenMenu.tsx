"use client"

import navbarStyle from "@/base/navbar.module.scss"
import { motion } from "framer-motion";
import { Link } from "react-scroll"

const HiddenMenu = () => {

    const hiddenMenuAnimation = {
        initial: {
            opacity:0,
        },
        open: {
            opacity:1,
            transition: {
                when: "beforeChildren",
                duration: 0.4,
                staggerChildren: 0.09,
            }
        },
        close: {
            opacity:0,
            transition: {
                when: "afterChildren",
                duration: 0.4,
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
    }

    const linkAnimation = {
        initial: {
            y: 40,
            opacity:0,
        },
        open: {
            y: 0,
            opacity:1,
        },
        close: {
            y: 40,
            opacity:0,
        },
    }

    return (
        <motion.nav
        className={navbarStyle.navbar__hiddenMenu} 
        variants={hiddenMenuAnimation} initial="initial" animate="open" exit="close"
        >
            <motion.div variants={linkAnimation}  whileHover={{ scale: 1.2 }}>
                <Link to={"home"} smooth={true} offset={-40} duration={500}>home</Link>
            </motion.div>
            <motion.div variants={linkAnimation} whileHover={{ scale: 1.2 }}>
                <Link to={"project"} smooth={true} offset={-40} duration={500}>project</Link>
            </motion.div>
            <motion.div variants={linkAnimation} whileHover={{ scale: 1.2 }}>
                <Link to={"about"} smooth={true} offset={-40} duration={500}>about</Link>
            </motion.div>
            <motion.div variants={linkAnimation} whileHover={{ scale: 1.2 }}>
                <Link to={"contact"} smooth={true} offset={-40} duration={500}>contact</Link>
            </motion.div>
        </motion.nav>
    )
}

export default HiddenMenu;