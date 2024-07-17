"use client"

import navbarStyle from "@/base/navbar.module.scss"
import { useToggle } from "@uidotdev/usehooks";
import { motion, AnimatePresence } from "framer-motion";
import HiddenMenu from "./HiddenMenu";

const Hamburguer = () => {
    const [ show, toggle ]: any = useToggle();
    
    const topLineAnimation = {
        open: {
            x: 0,
            y: 5,
            rotate: 45,
        },
        closed: {
            x: -5,
            y: -5,
            rotate: 0,
        }
    }

    const bottomLineAnimation = {
        open: {
            x: 0,
            y: 0,
            rotate: -45,
        },
        closed: {
            x: 5,
            y: 5,
            rotate: 0,
        }
    }

    return (
        <motion.div className={navbarStyle.navbar__hamburgerContainer}>
            <motion.button 
            onClick={toggle}
            className={navbarStyle.navbar__hamburguer}
            >
                <motion.span 
                className={navbarStyle.navbar__hamburguer__line1}
                style={{ backgroundColor: "hsl(0, 0%, 98%)"}}
                variants={topLineAnimation} initial={false} animate={show ? "open" : "closed"} 
                >
                </motion.span>

                <motion.span 
                className={navbarStyle.navbar__hamburguer__line2}
                style={{ backgroundColor: "hsl(0, 0%, 98%)" }}
                variants={bottomLineAnimation} initial={false} animate={show ? "open" : "closed"} 
                >

                </motion.span>
            </motion.button>
            <AnimatePresence>{show && <HiddenMenu />}</AnimatePresence>
        </motion.div>
    )}

export default Hamburguer;