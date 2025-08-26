import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <div className="text-3xl font-general-bold text-primary tracking-wider">
              MARÈS
            </div>
            <div className="text-sm font-general text-primary/80 tracking-wide -mt-1">
              Medicina Estética ~ Dra. Daniela Bueno
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('tratamientos')}
              className="text-primary hover:text-primary-glow transition-colors font-general font-medium hover:bg-primary/10 px-3 py-2 rounded-md"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => scrollToSection('equipo')}
              className="text-primary hover:text-primary-glow transition-colors font-general font-medium hover:bg-primary/10 px-3 py-2 rounded-md"
            >
              Equipo
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-primary hover:text-primary-glow transition-colors font-general font-medium hover:bg-primary/10 px-3 py-2 rounded-md"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-primary hover:text-primary-glow transition-colors font-general font-medium hover:bg-primary/10 px-3 py-2 rounded-md"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('citas')}
            className="bg-primary text-primary-foreground hover:bg-primary-glow font-general font-medium shadow-lg"
          >
            Pedir Cita
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;