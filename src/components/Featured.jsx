import House1 from "../assets/images/house1.webp"
import House2 from "../assets/images/house2.webp"
import House3 from "../assets/images/house3.webp"

import { motion } from 'framer-motion'

const Featured = () => {
  return (
    <section id="featured" className="flex flex-col lg:gap-15 xl:mx-[8%] pb-20">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }} viewport={{ once: true }} className="pt-20 text-4xl lg:text-5xl self-center font-medium font-heading lg:pb-10 pb-20">Featured Listings</motion.h2>

      <div className="flex flex-col md:flex-row justify-between md:gap-10">
        <div className="bg-gray-100">
          <div className="overflow-hidden w-full">
            <motion.img src={House1} alt="property 1" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }} viewport={{ once: true }} className="w-full md:h-70 lg:h-80 xl:h-95 transition duration-500 ease-out md:hover:scale-105 md:brightness-[0.9] md:hover:brightness-[1]"/>
          </div>

          <div className="px-[10%] py-15 flex flex-col gap-10">
            <h4 className="font-semibold text-xl lg:text-2xl font-heading">
              <span>The Harlow Residence</span>
              <span className="block mt-1">Beverly Hills, CA — $8,400,000</span>
            </h4>

            <p className="leading-relaxed font-secondary text-sm lg:text-base">Occupying the entire 54th floor of a Midtown tower, this residence blends dark stone elegance with private terrace skyline views.</p>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="overflow-hidden w-full">
            <motion.img src={House2} alt="property 2" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: 'easeOut', delay:0.4 }} viewport={{ once: true }} className="w-full md:h-70 lg:h-80 xl:h-95 transition duration-500 ease-out md:hover:scale-105 md:brightness-[0.9] md:hover:brightness-[1]"/>
          </div>

          <div className="px-[10%] py-15 flex flex-col gap-10">
            <h4 className="font-semibold text-xl lg:text-2xl font-heading">
              <span>Villa Solenne</span>
              <span className="block mt-1">Malibu, CA — $19,900,000</span>
            </h4>

            <p className="leading-relaxed font-secondary text-sm lg:text-base">Designed by award-winning architect Jean Moreau, this villa balances scale, privacy, and coastal elegance.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:items-center lg:flex-row bg-gray-100">
        <div className="overflow-hidden lg:w-1/2 items-center flex">
          <motion.img src={House3} alt="property 3" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }} viewport={{ once: true }} className="w-full transition duration-500 ease-out md:hover:scale-105 md:brightness-[0.9] md:hover:brightness-[1]"/>
        </div>
        

        <div className="px-[10%] flex flex-col gap-10 lg:w-1/2 pt-15 lg:pt-0">
          <h4 className="font-semibold text-xl lg:text-2xl font-heading">
            <span>Obsidian Penthouse</span>
            <span className="block mt-1">Manhattan, NY — $12,750,000</span>
          </h4>

          <p className="leading-relaxed font-secondary text-sm lg:text-base">A sculptural masterpiece perched above Sunset Hills. Floor-to-ceiling glass opens to infinity pool and city vistas that stretch as far as the eye can see.</p>
        </div>
      </div>
    </section>
  )
}

export default Featured