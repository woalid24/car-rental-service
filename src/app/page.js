import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Cars from "@/components/Cars"
import About from "@/components/About"
import Why from "@/components/Why"
import Testimonial from "@/components/Testimonial"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BactToTopBtn from "@/components/BactToTopBtn"



export default function Home() {
  return (
    <main className="max-w-[2000px] bg-white mx-auto relative overflow-hidden">
      <Header/>
      <Hero/>
      <Cars/>
      <About/>
      <Why/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <BactToTopBtn/>
      {/* <div className="h-[34325px]"></div> */}
    </main>
  )
}
