import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Expectations from './components/Expectations'
import Benefits from './components/Benefits'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Expectations />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
