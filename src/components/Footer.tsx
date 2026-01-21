import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handlePedirCita = () => {
    navigate('/contacto');
  };

  return (
    <footer className="relative py-10 md:py-12 lg:py-16 overflow-hidden bg-treatment-badge">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Copyright and legal links */}
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/90 text-sm lg:text-base mb-2">
              © {currentYear} Clínica Marès. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-xs lg:text-sm">
              <a 
                href="/aviso-legal" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Aviso legal
              </a>
              <a 
                href="/politica-privacidad" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Política de privacidad
              </a>
              <a 
                href="/cookies" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <p className="text-primary-foreground/90 text-sm lg:text-base mr-2">Síguenos:</p>
            <a 
              href="https://www.instagram.com/mares_clinic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
            </a>
            <div className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors cursor-pointer">
              <Facebook className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Legal note */}
        <div className="pt-6 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/70 text-xs lg:text-sm text-center leading-relaxed max-w-4xl mx-auto">
            Clínica Marès es un centro sanitario autorizado por la Consejería de Sanidad del Gobierno de Canarias. 
            Registro Sanitario: C-35-000XX. Directora médica: Dra. Daniela Bueno Ventura (Socia de la SEME con nº 2898 de colegiación). 
            Los tratamientos de medicina estética deben ser siempre realizados por médicos colegiados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;