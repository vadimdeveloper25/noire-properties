import aboutImg from "../assets/images/about.webp"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative h-dvh text-white p-[10%] flex md:justify-center md:h-[90vh] lg:h-[80vh]">
      <motion.img src={aboutImg} loading="lazy" alt="about interior" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }} viewport={{ once: true }} className="absolute inset-0 h-full w-full object-cover brightness-[0.5]"/>

      <div className="relative flex flex-col gap-15 self-center md:w-3/4 xl:w-1/2 md:items-center">
        <h3 className="text-4xl lg:text-5xl font-heading font-medium">About Noire Properties</h3>

        <p className="leading-loose lg:text-lg font-secondary">Noire Properties is a boutique luxury real estate firm serving an elite global clientele. We don’t simply list homes — we curate private worlds of design, discretion, and prestige.</p>
      </div>
    </section>
  )
}

export default About