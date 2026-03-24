import finalImg from "../assets/images/final.webp"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Final = () => {
  const [btnState, setBtnState] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!formData.email || !formData.name || !formData.message) {
      setError('Please fill in all fields')
      return
    }

    setError('')

    const data = new FormData()
    data.append("access_key", "b302c8f5-b7b8-4365-be73-2d78d6a254d8")
    data.append("email", formData.email)
    data.append("name", formData.name)
    data.append("message", formData.message)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    })

    const result = await response.json()

    if (result.success) {
      setSuccess(true)
      setFormData({ email: '', name: '', message: '' })
    } else {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="final" className="relative h-dvh text-white p-[10%] flex sm:justify-center">
      <motion.img src={finalImg} loading="lazy" alt="cta background" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }} viewport={{ once: true }} className="absolute inset-0 h-full w-full object-cover brightness-[0.5]"/>

      <AnimatePresence mode="wait">
        {!btnState && (
          <motion.div key="cta" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative flex flex-col gap-8 self-center">
            <h3 className="text-4xl lg:text-5xl font-heading font-medium md:self-center">Step Inside Your Future</h3>

            <p className="leading-relaxed mt-5 lg:text-lg font-secondary">Your next residence is not just a home — it's a statement, a legacy, a lifestyle.</p>

            <button onClick={() => setBtnState(prev => !prev)} className="md:self-center focus-visible:outline-none focus-visible:ring-2 focus:ring-black font-medium py-5 rounded-4xl whitespace-nowrap lg:text-sm text-xs w-55 lg:w-60 bg-offwhite text-black hover:scale-95 transition ease-out hover:border-white cursor-pointer duration-300">Request Exclusive Access</button>
          </motion.div>
        )}

        {btnState && (
          <motion.div key="form" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative flex flex-col gap-8 self-center sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3">
            <h3 className="text-4xl lg:text-5xl font-heading font-medium md:self-center">Reach Us</h3>

            <p className="leading-relaxed mt-5 lg:text-lg font-secondary">Our advisors are available to guide you through every step of your search — privately and without obligation.</p>

            <div className="flex flex-col gap-4 w-[85%] md:self-center">
              <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="py-5 p-10 rounded-4xl text-xs lg:text-sm w-full focus:outline-white outline-2 placeholder:text-white" placeholder="Email Address"/>

              <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="py-5 p-10 rounded-4xl text-xs lg:text-sm w-full focus:outline-white outline-2 placeholder:text-white" placeholder="Full Name"/>

              <input value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="py-5 p-10 rounded-4xl lg:text-sm text-xs w-full focus:outline-white outline-2 placeholder:text-white" placeholder="Message"/>

              <button onClick={handleSubmit} className="focus-visible:outline-none focus-visible:ring-2 focus:ring-black font-medium py-5 rounded-4xl whitespace-nowrap lg:text-base text-xs w-full bg-offwhite text-black hover:scale-95 transition ease-out hover:border-white cursor-pointer duration-300">Submit Enquiry</button>
              
              {error && <p className="text-red-400 text-sm mt-2 md:self-center">{error}</p>}
              {success && <p className="text-green-400 text-sm mt-2 md:self-center">Message sent successfully!</p>}

              <button onClick={() => setBtnState(prev => !prev)} className="absolute top-0 right-0 cursor-pointer outline-none focus-visible:ring-2 focus:ring-black font-medium rounded-4xl"><X size={40} strokeWidth={1.2} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Final