"use client"

import HomePage from "@/app/(routes)/home/HomePage"
import About from "@/about/About"
import Project from "@/app/(routes)/project/Project"
import Contact from "@/contact/Contact"
import { contextStore } from "@/store/Context"

export default function Home() {
  const darkMode: boolean = contextStore(state => state.darkMode)
  let toggleSectionClass: string = darkMode ? "darkModeClass" : "brightModeClass";

  return (
    <main className={toggleSectionClass}>
      <HomePage />
      <Project />
      <About />
      <Contact />
    </main>
  )
}