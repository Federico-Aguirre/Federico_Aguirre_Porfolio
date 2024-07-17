import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import homeStyle from "@/pages/home.module.scss"

const TextSpan = ({children}) => {
    const [isplaying, setisplaying] = useState(false)
    const control = useAnimationControls();

    const rubberBand = () => {
        control.start ({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)"
            ]
        })
        setisplaying(true)
    }

  return (
    <motion.span
    className={homeStyle.homePage__title__span}
    initial="hidden"
    animate={control}
    transition={{ staggerChildren: .1 }}
    aria-hidden
    onMouseOver={() => {
        if(!isplaying)
            rubberBand()
        }
    }
    onAnimationComplete={() => setisplaying(false)}
    >
        {children}
    </motion.span>
  )
}

export default TextSpan;