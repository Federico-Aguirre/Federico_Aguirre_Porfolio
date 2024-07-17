import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Config } from "./Config"
import particlesStyle from "@/base/particlesStyle.module.scss"

export const ParticlesBackground = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

  return (
    <div>
        <Particles className={particlesStyle.particles} options={Config} init={particlesInit} />
    </div>
  )
}
