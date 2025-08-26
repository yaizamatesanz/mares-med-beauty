import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Appointments from "@/components/Appointments";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Animación de elementos al scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observar todos los elementos con clase fade-in-up
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Padding for fixed header */}
        <Hero />
        <div id="por-que-elegirnos">
          <WhyChooseUs />
        </div>
        <div id="tratamientos">
          <Services />
        </div>
        <BeforeAfter />
        <div id="equipo">
          <Team />
        </div>
        <div id="testimonios">
          <Testimonials />
        </div>
        <div id="citas">
          <Appointments />
        </div>
        <FAQ />
        <div id="contacto">
          <Contact />
        </div>
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
