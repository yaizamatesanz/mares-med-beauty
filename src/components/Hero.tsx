import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up animate">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-foreground leading-tight">
                Belleza serena,<br />
                <span className="text-primary font-medium">ciencia precisa</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Medicina estética en Las Palmas de Gran Canaria inspirada en la piedra de marès: 
                natural, luminosa y elegante.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('citas')}
                className="cta-premium group"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Pedir cita online
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollToSection('servicios')}
                variant="outline" 
                size="lg"
                className="cta-secondary"
              >
                Ver tratamientos
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-general-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-general-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Valoración</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-general-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-up animate" style={{ animationDelay: '200ms' }}>
            <img
              src={heroImage}
              alt="Clínica de medicina estética Marès en Las Palmas de Gran Canaria"
              className="rounded-2xl shadow-strong w-full h-[600px] object-cover hover-lift"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* CTA Sticky Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <Button 
          onClick={() => scrollToSection('citas')}
          className="w-full cta-premium"
          size="lg"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Pedir cita online
        </Button>
      </div>
    </section>
  );
};

export default Hero;