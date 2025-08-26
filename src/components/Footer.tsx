import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Clínica Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-cormorant font-bold text-background mb-2">
                Clínica Mares
              </h3>
              <p className="text-background/80 leading-relaxed">
                Medicina estética en Menorca inspirada en la piedra de marès. 
                Belleza natural, ciencia precisa, resultados que respetan tu esencia única.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background font-medium">Carrer de Ses Moreres, 15</p>
                  <p className="text-background/80">07701 Mahón, Menorca</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+34971123456" 
                  className="text-background hover:text-primary transition-colors"
                >
                  +34 971 12 34 56
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@clinicamares.es" 
                  className="text-background hover:text-primary transition-colors"
                >
                  info@clinicamares.es
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <div>Lun - Vie: 09:00 - 19:00</div>
                  <div>Sáb: 09:00 - 14:00</div>
                  <div>Dom: Cerrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-cormorant font-semibold text-background mb-6">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Tratamientos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('citas')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Pedir cita
                </button>
              </li>
              <li>
                <a 
                  href="#equipo" 
                  onClick={() => scrollToSection('equipo')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Nuestro equipo
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/34971123456" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Tratamientos */}
          <div>
            <h4 className="text-xl font-cormorant font-semibold text-background mb-6">
              Tratamientos
            </h4>
            <ul className="space-y-3 text-background/80 text-sm">
              <li>Toxina botulínica</li>
              <li>Ácido hialurónico</li>
              <li>Skin boosters</li>
              <li>Peelings médicos</li>
              <li>Rejuvenecimiento láser</li>
              <li>Asesoría médica</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-12"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-background/80 text-sm">
              © {currentYear} Clínica Mares. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs">
              <a 
                href="/aviso-legal" 
                className="text-background/60 hover:text-primary transition-colors"
              >
                Aviso legal
              </a>
              <a 
                href="/politica-privacidad" 
                className="text-background/60 hover:text-primary transition-colors"
              >
                Política de privacidad
              </a>
              <a 
                href="/cookies" 
                className="text-background/60 hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <p className="text-background/80 text-sm mr-2">Síguenos:</p>
            <a 
              href="https://instagram.com/clinicamares" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Instagram className="h-5 w-5 text-background" />
            </a>
            <a 
              href="https://facebook.com/clinicamares" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Facebook className="h-5 w-5 text-background" />
            </a>
          </div>
        </div>

        {/* Legal note */}
        <div className="mt-8 pt-6 border-t border-background/20">
          <p className="text-background/60 text-xs text-center leading-relaxed">
            Clínica Mares es un centro sanitario autorizado por la Conselleria de Salut del Govern de les Illes Balears. 
            Registro Sanitario: C-07-000XX. Directora médica: Dra. Marina Castell (Col. nº 07/2847). 
            Los tratamientos de medicina estética deben ser siempre realizados por médicos colegiados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;