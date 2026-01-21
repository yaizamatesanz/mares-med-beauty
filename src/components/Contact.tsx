import { MapPin, Phone, Clock, Navigation, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactBg from "@/assets/fondo-contacto.webp";
const Contact = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Calle+Perdomo+Nº8+Local+9,+35002,+Las+Palmas+de+Gran+Canaria', '_blank');
  };
  const openWhatsApp = () => {
    window.open('https://wa.me/34639374945?text=Hola, me gustaría pedir información sobre tratamientos', '_blank');
  };
  return <section className="py-20 xl:py-28 2xl:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={contactBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-16 xl:mb-20 fade-in-up animate">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-foreground mb-6 xl:mb-8">
            Visítanos en <span className="font-semibold text-primary">Las Palmas</span>
          </h3>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Te esperamos en el corazón de Las Palmas de Gran Canaria,<br />
            con fácil acceso y parking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="fade-in-up animate h-full">
            <div className="bg-[#F2E6D7]/80 backdrop-blur-sm p-8 xl:p-10 2xl:p-12 rounded-2xl border border-border shadow-strong h-full">
              <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-general-bold text-foreground mb-6 xl:mb-8">
                Información de contacto
              </h3>

              <div className="space-y-6 xl:space-y-8">
                <div className="flex items-start space-x-4 xl:space-x-6">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#F4A258] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-base xl:text-lg 2xl:text-xl">Dirección</h4>
                    <p className="text-muted-foreground text-sm lg:text-base xl:text-lg">
                      Calle Perdomo nº8 Local 9<br />
                      35002 Las Palmas de Gran Canaria<br />
                      Las Palmas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 xl:space-x-6">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#F4A258] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-base xl:text-lg 2xl:text-xl">Teléfono</h4>
                    <a href="tel:+34639374945" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base xl:text-lg">
                      639 37 49 45
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 xl:space-x-6">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#F4A258] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-base xl:text-lg 2xl:text-xl">Horarios</h4>
                    <div className="text-muted-foreground space-y-1 text-sm lg:text-base xl:text-lg">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span>10:00 - 19:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Como llegar */}
            
          </div>

          {/* Ubicación */}
          <div className="fade-in-up animate h-full" style={{ animationDelay: '200ms' }}>
            <div className="bg-[#F2E6D7]/80 backdrop-blur-sm p-8 xl:p-10 2xl:p-12 rounded-2xl border border-border shadow-strong h-full flex flex-col items-center justify-center text-center">
              <MapPin className="h-16 w-16 xl:h-20 xl:w-20 text-primary mb-6" />
              
              <h4 className="font-general-bold text-foreground mb-3 text-xl xl:text-2xl 2xl:text-3xl">
                Clínica Marès
              </h4>
              
              <p className="text-muted-foreground text-sm lg:text-base xl:text-lg mb-6">
                Calle Perdomo nº8 Local 9<br />
                Las Palmas de Gran Canaria
              </p>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Calle+Perdomo+Nº8+Local+9,+35002,+Las+Palmas+de+Gran+Canaria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-semibold shadow-strong rounded-md transition-colors text-sm xl:text-base"
              >
                <MapPin className="h-4 w-4" />
                Ver ubicación
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp flotante para móvil */}
        <div className="fixed bottom-20 right-4 z-40 lg:hidden">
          
        </div>
      </div>
    </section>;
};
export default Contact;