import { MapPin, Phone, Clock, Navigation, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/mahon+menorca+clinic', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/34971123456?text=Hola, me gustaría pedir información sobre tratamientos', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Visítanos en <span className="text-primary font-medium">Menorca</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Te esperamos en el corazón de Mahón, con fácil acceso y parking gratuito
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-up animate">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-general-bold text-foreground mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Carrer de Ses Moreres, 15<br />
                      07701 Mahón, Menorca<br />
                      Illes Balears
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <a 
                      href="tel:+34971123456" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +34 971 12 34 56
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horarios</h4>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span>09:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span>09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={openWhatsApp}
                className="w-full mt-8 cta-premium"
                size="lg"
              >
                💬 Contactar por WhatsApp
              </Button>
            </div>

            {/* Como llegar */}
            <div className="bg-mares-gradient p-6 rounded-2xl">
              <h4 className="text-xl font-general-bold text-foreground mb-4">
                Cómo llegar
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">En coche</p>
                    <p className="text-sm text-muted-foreground">
                      Parking gratuito en las calles cercanas. Zona azul con 2 horas gratis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Navigation className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Transporte público</p>
                    <p className="text-sm text-muted-foreground">
                      Parada de autobús a 100m. Líneas 10 y 15 desde el aeropuerto.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={openGoogleMaps}
                variant="outline" 
                className="w-full mt-4"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver en Google Maps
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="fade-in-up animate" style={{ animationDelay: '200ms' }}>
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden h-full min-h-[500px]">
              <div className="relative w-full h-full bg-accent flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <h4 className="text-xl font-general-bold text-foreground">
                    Clínica Marès
                  </h4>
                  <p className="text-muted-foreground">
                    Carrer de Ses Moreres, 15<br />
                    Mahón, Menorca
                  </p>
                  <Button onClick={openGoogleMaps} className="cta-secondary">
                    Abrir mapa interactivo
                  </Button>
                </div>
                
                {/* Overlay que simula un mapa */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <pattern id="map-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#map-pattern)"/>
                    <circle cx="200" cy="200" r="8" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp flotante para móvil */}
        <div className="fixed bottom-20 right-4 z-40 lg:hidden">
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-strong"
          >
            💬
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;