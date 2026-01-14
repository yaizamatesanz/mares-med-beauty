import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-portada.webp";
const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Clínica de medicina estética Marès en Las Palmas de Gran Canaria" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content - Left Aligned */}
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 py-24 xl:py-32 2xl:py-40 relative z-10">
        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl space-y-6 xl:space-y-8 fade-in-up animate">
          <div className="space-y-4 xl:space-y-6">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-white leading-tight">
              Cuidamos tu belleza,<br />
              <span className="text-primary font-medium">respetamos tu esencia</span>
            </h1>
            
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 xl:gap-4">
            <Button onClick={() => navigate('/contacto')} className="bg-primary hover:bg-primary/90 text-primary-foreground group rounded-full text-sm xl:text-base 2xl:text-lg px-6 xl:px-8 transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:-translate-y-0.5" size="default">
              <Calendar className="mr-2 h-4 w-4 xl:h-5 xl:w-5" />
              Pedir cita
            </Button>
            <Button onClick={() => scrollToSection('servicios')} variant="outline" size="default" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm rounded-full text-sm xl:text-base 2xl:text-lg px-6 xl:px-8">
              Ver tratamientos
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Sticky Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <Button onClick={() => navigate('/contacto')} className="w-full cta-premium rounded-full" size="lg">
          <Calendar className="mr-2 h-5 w-5" />
          Pedir cita
        </Button>
      </div>
    </section>;
};
export default Hero;