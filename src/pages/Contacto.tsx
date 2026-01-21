import { useEffect } from "react";
import Header from "@/components/Header";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import contactBg from "@/assets/fondo-contacto.webp";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl 2xl:max-w-4xl mx-auto text-center fade-in-up animate">
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-light text-foreground mb-4 md:mb-6">
                Reserva tu <span className="text-primary font-medium">cita</span>
              </h2>
              <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground leading-relaxed">
                Estamos aquí para ayudarte a realzar tu belleza natural. 
                Completa el formulario y te contactaremos pronto.
              </p>
            </div>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className="py-10 md:py-12 lg:py-16 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img src={contactBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
            <div className="max-w-5xl 2xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="fade-in-up animate">
                <AppointmentForm />
              </div>
              
              <div className="space-y-4 md:space-y-6 fade-in-up animate" style={{ animationDelay: '200ms' }}>
                <div className="bg-background/90 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-soft">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    ¿Por qué elegirnos?
                  </h3>
                  <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Médico colegiado especializado en medicina estética</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Resultados naturales y armoniosos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Productos de máxima calidad certificados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Atención personalizada y seguimiento completo</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/90 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-soft">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    Contacto directo
                  </h3>
                  <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                    <a href="tel:+34639374945" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <span className="mr-3">📞</span>
                      <span>+34 639 374 945</span>
                    </a>
                    <a href="https://wa.me/34639374945?text=Hola, me gustaría pedir una cita" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <span className="mr-3">💬</span>
                      <span>WhatsApp: 639 374 945</span>
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Calle+Perdomo+8,+Las+Palmas+de+Gran+Canaria"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="mr-3">📍</span>
                      <span>Ver ubicación</span>
                    </a>
                  </div>
                </div>

                <div className="bg-background/90 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-soft">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Horario de atención:</strong><br />
                    Lunes a Viernes: 09:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Contacto;