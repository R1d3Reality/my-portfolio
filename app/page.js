import NavBar from '../app/components/NavBar'
import HeroSection from "../app/components/HeroSection";
import AboutSection from "../app/components/AboutSection";
import ProjectsSection from "../app/components/ProjectsSection";
import EmailSection from "../app/components/EmailSection";
import Footer from "../app/components/Footer";


export default function Home() {
  return (
      <main className='flex min-h-screen flex-col bg-[#121212] '>
          <NavBar />
          <div className='container mt-24 mx-auto px-12 py-4'>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <EmailSection />
          </div>
          <Footer />
      </main>
  )
}
