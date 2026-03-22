import heroImg from '../assets/images/hero.webp'
import Logo from '../assets/images/logo.webp'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <section className="z-10 h-screen text-white relative pl-[10%] lg:pl-[8%] py-10 bg-black">
      <img src={heroImg} alt="hero property" loading="lazy" className="w-full h-full object-cover absolute inset-0 brightness-[0.6]"/>

      <header className="relative flex justify-between items-center">
        <div className="flex items-center gap-2 -translate-x-2">
          <img src={Logo} alt="Noire Properties logo" className="w-10 h-10 xl:w-12 xl:h-12"/>

          <p className="font-medium font-secondary sm:text-lg md:text-xl xl:text-2xl">Noire Properties</p>
        </div>
        
        <nav className="gap-5 xl:gap-7 hidden font-medium text-sm lg:flex pr-[10%] lg:pr-[8%]">
          <a href="#featured" className="focus:outline-none focus:ring-2 focus:ring-white w-30 py-3 border-2 flex justify-center rounded-4xl active:scale-95 active:duration-50 hover:bg-offwhite hover:text-black transition ease-in hover:border-transparent hover:cursor-pointer duration-300">Featured</a>
          <a href="#about" className="focus:outline-none focus:ring-2 focus:ring-white w-30 py-3 border-2 flex justify-center rounded-4xl active:scale-95 active:duration-50 hover:bg-offwhite hover:text-black transition ease-in hover:border-transparent hover:cursor-pointer duration-300">About</a>
          <a href="#why" className="focus:outline-none focus:ring-2 focus:ring-white w-30 py-3 border-2 flex justify-center rounded-4xl active:scale-95 active:duration-50 hover:bg-offwhite hover:text-black transition ease-in hover:border-transparent hover:cursor-pointer duration-300">Why Us</a>
        </nav>

        <button onClick={() => setMenuState(prev => !prev)} className="lg:hidden border-2 rounded-full p-3 mr-[10%] transition duration-300 hover:rotate-90 cursor-pointer focus-visible:ring-2 focus:outline-none"><Menu size={30} /></button>

        <AnimatePresence>
          {menuState && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="absolute right-10 top-20 p-6 rounded-4xl bg-offwhite text-black text-sm">
              <nav className="relative flex flex-col gap-2 items-center">
                <a href="#featured" className="focus:outline-none focus-visible:ring-2 focus:ring-black hover:underline active:scale-95 ease-in transition active:duration-50 underline-offset-6 py-2 px-5 rounded-full cursor-pointer">Featured</a>
                <a href="#about" className="focus:outline-none focus-visible:ring-2 focus:ring-black hover:underline active:scale-95 active:duration-50 ease-in transition underline-offset-6 py-2 px-5 rounded-full cursor-pointer">About</a>
                <a href="#why" className="focus:outline-none focus-visible:ring-2 focus:ring-black hover:underline active:scale-95 active:duration-50 ease-in transition underline-offset-6 py-2 px-5 rounded-full cursor-pointer">Why Us</a>
              </nav>

              <button onClick={() => setMenuState(prev => !prev)} className="absolute top-3 right-3 cursor-pointer outline-none focus-visible:ring-2 focus:ring-black font-medium rounded-4xl"><X size={30} strokeWidth={1.2} /></button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay:0.2 }} className="flex flex-col gap-10 absolute bottom-10">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay:0 }} className="text-6xl sm:text-7xl lg:text-8xl font-heading font-semibold flex-col flex">
          <span className="block">Live Beyond</span>

          <span className="block ml-[10%]">Expectation</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay:0.2 }} className="mt-5 leading-relaxed pr-[20%] lg:text-xl lg:pr-[40%] text-lg font-secondary">Exclusive residences that redefine luxury — for those who settle for nothing less than distinction.</motion.p>

        <a href="#final" className="focus:outline-none focus-visible:ring-2 focus:ring-white flex justify-center font-medium py-5 border-2 rounded-4xl active:scale-95 active:duration-50 whitespace-nowrap text-sm lg:text-sm w-50 lg:w-50 hover:bg-offwhite hover:text-black transition ease-in hover:border-transparent hover:cursor-pointer duration-300">Request a Viewing</a>
      </motion.div>

      <div className="-z-10 absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"/>
    </section>
  )
}

export default Hero