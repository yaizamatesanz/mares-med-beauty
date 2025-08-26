import { useEffect } from "react";
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
      <Hero />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <div id="equipo">
        <Team />
      </div>
      <Testimonials />
      <Appointments />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
