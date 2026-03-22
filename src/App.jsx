import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Why from './components/Why'
import Final from './components/Final'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className="bg-offwhite font-body">
      <Hero />
      <Featured />
      <About />
      <Why />
      <Final />
      <Footer />
    </main>
  )
}

export default App