"use client"

import { contextStore } from "@/store/Context"
import "@/animations/globalAnimations.scss"
import homeStyle from "@/pages/home.module.scss"
import { Link } from "react-scroll"
import { delay, motion } from "framer-motion";

const CallToAction = () => {
  const { darkMode } = contextStore()
  let toggleShadowClass = darkMode ? "darkModeShadowClass" : "brightModeShadowClass";

  const showFromBelowAnimation = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .5,
        duration: .3,
      }
    },
  }

  const menuItems: { id: number; title: string; }[] = [
    {
      id: 1,
      title: "project",
    },
  ]

  return (
    <motion.div className={`${homeStyle.homePage__CallToAction} ${toggleShadowClass}`} variants={showFromBelowAnimation} initial="initial" animate="animate" whileHover={{ scale: 1.2 }}>
      {menuItems.map((menu: { id: number; title: string; }, index: number) => (
        <Link to={menu.title} smooth={true} offset={-40} duration={500} key={index}>
          Watch Projects
        </Link>
      ))}
    </motion.div>
  )
}

export default CallToAction