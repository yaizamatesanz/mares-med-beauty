import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logoMares from "@/assets/logo-mares-new.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1500px]">
      <div className="rounded-full shadow-lg border border-border/20 px-6 lg:px-10 xl:px-12 py-3" style={{backgroundColor: '#FFFFFF'}}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src={logoMares}
              alt="MARÈS - Medicina Estética Dra. Daniela Bueno" 
              className="h-14 w-auto object-contain"
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Navigation - Centered on desktop */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <button 
              onClick={() => navigate('/')}
              className="text-foreground hover:text-primary transition-colors font-general font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => navigate('/tratamientos')}
              className="text-foreground hover:text-primary transition-colors font-general font-medium"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => handleNavigation('equipo')}
              className="text-foreground hover:text-primary transition-colors font-general font-medium"
            >
              Conócenos
            </button>
            <button
              onClick={() => navigate('/contacto')}
              className="text-foreground hover:text-primary transition-colors font-general font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={() => navigate('/contacto')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-medium transition-all duration-300"
            >
              Pedir cita
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-background">
              <nav className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => navigate('/')}
                  className="text-foreground hover:text-primary transition-colors font-general font-medium text-left px-4 py-2 hover:bg-primary/10 rounded-md"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => navigate('/tratamientos')}
                  className="text-foreground hover:text-primary transition-colors font-general font-medium text-left px-4 py-2 hover:bg-primary/10 rounded-md"
                >
                  Tratamientos
                </button>
                <button 
                  onClick={() => handleNavigation('equipo')}
                  className="text-foreground hover:text-primary transition-colors font-general font-medium text-left px-4 py-2 hover:bg-primary/10 rounded-md"
                >
                  Conócenos
                </button>
                <button
                  onClick={() => navigate('/contacto')}
                  className="text-foreground hover:text-primary transition-colors font-general font-medium text-left px-4 py-2 hover:bg-primary/10 rounded-md"
                >
                  Contacto
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;