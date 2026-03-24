import whyImg from "../assets/images/why.webp"
import { motion } from 'framer-motion'

const Why = () => {
  return (
    <section id="why" className="flex flex-col lg:gap-10 pb-20 ">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }} viewport={{ once: true }} className="pt-20 text-3xl md:text-4xl pb-5 lg:text-5xl self-center font-heading font-medium">Why Noire</motion.h2>
      
      <div className="flex flex-col gap-10 xl:flex-row items-center">
        <div className="flex flex-col gap-10 px-[8%]">
          <div className="flex flex-col gap-10 py-15 lg:py-10">
            <h4 className="flex text-xl lg:text-2xl font-heading font-semibold">Unparalleled Craftsmanship</h4>

            <p className="leading-relaxed font-secondary lg:text-lg">Every detail tells a story of artistry and precision. From hand-selected materials to bespoke finishes, our residences are crafted to inspire awe. Living here means surrounding yourself with beauty that elevates every moment.</p>
          </div>

          <div className="bg-divider h-0.5 w-full"></div>

          <div className="flex flex-col gap-10 py-15 lg:py-10">
            <h4 className="flex text-xl lg:text-2xl font-heading font-semibold">Beyond Expectation</h4>

            <p className="leading-relaxed lg:text-lg font-secondary">Luxury is not defined by price, but by experience. Seamless design, ultimate privacy, and curated spaces transform everyday life into an art form. At Noire Properties, your home becomes a personal sanctuary, where distinction is standard.</p>
          </div>
        </div>
                
        <motion.img src={whyImg} loading="lazy" alt="why interior" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: 'easeOut', delay:0.4 }} viewport={{ once: true }} className="w-full xl:w-[45%]"/>
      </div>
    </section>
  )
}

export default Why