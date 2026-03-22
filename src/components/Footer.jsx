import Logo from '../assets/images/logo.webp'

const Footer = () => {
  return (
    <section className="flex flex-col gap-20 px-[10%] lg:px-[8%] py-20">
      <div className="bg-divider h-0.5 w-full"></div>

      <div className="flex flex-col gap-20 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-10 items-center lg:items-start">
          <div className="flex items-center gap-2 -translate-x-2">
            <img src={Logo} alt="Noire Properties logo" className="w-12 h-12 -x-10"/>
            
            <p className="font-medium font-secondary text-2xl">Noire Properties</p>
          </div>
          
          <p className="text-sm font-secondary">© 2025 Noire Properties. All rights reserved.</p>
        </div>

        <nav className="flex lg:flex-col xl:flex-row xl:text-lg gap-4 justify-center items-center">
          <a href="#featured" className="focus:outline-none focus-visible:ring-2 focus:ring-black hover:underline active:scale-95  ease-in transition active:duration-50 underline-offset-6 py-2 px-5 rounded-full cursor-pointer">Featured</a>
          <a href="#about" className="focus:outline-none focus-visible:ring-2 focus:ring-black hover:underline active:scale-95 active:duration-50 ease-in transition underline-offset-6 py-2 px-5 rounded-full cursor-pointer">About</a>
          <a href="#why" className="focus:outline-none focus-visible:ring-2 focus:ring-black hover:underline active:scale-95 active:duration-50 ease-in transition underline-offset-6 py-2 px-5 rounded-full cursor-pointer">Why Us</a>
        </nav>

        <div className="flex flex-col gap-10 items-center font-secondary text-lg lg:items-end">
          <p>inquiries@noireprop.com</p>
          
          <p>+1 (310) 924-0071</p>
        </div>
      </div>
    </section>
  )
}

export default Footer