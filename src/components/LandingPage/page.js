import Image from 'next/image'
import Navigatiom from './Navbar'
import Hero from './HeroSection'
import Stats from './Stats'
import BeADoctor from "./BeADoctor"
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import Footer from './Footer'
import ServicesWeProvide from './ServicesWeProvide'

export default function Home() {
  return (
    <>

      <Navigatiom />
      <Hero />
      <Stats />
      <BeADoctor />
      <AboutUs />
      <ServicesWeProvide />
      <Testimonials />
      <Footer />
    </>
  )
}
