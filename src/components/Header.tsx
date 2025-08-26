import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-general-bold text-foreground">
              Clínica <span className="text-primary">Marès</span>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('tratamientos')}
              className="text-foreground hover:text-primary transition-colors font-general"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => scrollToSection('equipo')}
              className="text-foreground hover:text-primary transition-colors font-general"
            >
              Equipo
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-foreground hover:text-primary transition-colors font-general"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors font-general"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('citas')}
            className="bg-primary text-primary-foreground hover:bg-primary-glow font-general"
          >
            Pedir Cita
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;