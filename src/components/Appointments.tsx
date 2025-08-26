import { Button } from "@/components/ui/button";
import { Calendar, Clock, CreditCard, Shield, CheckCircle } from "lucide-react";

const Appointments = () => {
  const openCalendly = () => {
    // Aquí iría la integración con Calendly o sistema de citas
    window.open('https://calendly.com/clinica-mares', '_blank');
  };

  const handleStripePayment = () => {
    // Aquí iría la integración con Stripe para pago de reserva
    console.log('Procesando pago de reserva...');
  };

  return (
    <section id="citas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            <span className="text-primary font-medium">Reserva</span> tu cita online
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda tu consulta en menos de 2 minutos. Flexible y sin complicaciones.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Process */}
            <div className="space-y-8 fade-in-up animate">
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-general-bold text-foreground mb-6">
                  Proceso de reserva
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Selecciona fecha y hora</h4>
                      <p className="text-muted-foreground">Elige el momento que mejor se adapte a tu horario</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Completa tus datos</h4>
                      <p className="text-muted-foreground">Información básica para preparar tu consulta</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Confirma con reserva</h4>
                      <p className="text-muted-foreground">Pago de reserva que se descuenta del tratamiento</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={openCalendly}
                  className="w-full mt-8 cta-premium"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Abrir calendario de citas
                </Button>
              </div>

              {/* Benefits */}
              <div className="bg-mares-gradient p-6 rounded-2xl">
                <h4 className="text-xl font-general-bold text-foreground mb-4">
                  Ventajas de reservar online
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Cambios hasta 24h sin coste</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Reserva descontada del tratamiento</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Confirmación inmediata por WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Recordatorio 24h antes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Appointment Types & Pricing */}
            <div className="space-y-8 fade-in-up animate" style={{ animationDelay: '200ms' }}>
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-general-bold text-foreground mb-6">
                  Tipos de consulta
                </h3>

                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-xl hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">Primera consulta</h4>
                      <span className="text-primary font-bold">50€</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      Valoración completa + plan personalizado
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      60 minutos
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-xl hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">Consulta de seguimiento</h4>
                      <span className="text-primary font-bold">30€</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      Revisión y ajustes post-tratamiento
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      30 minutos
                    </div>
                  </div>

                  <div className="p-4 bg-primary-light border border-primary rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">Consulta gratuita online</h4>
                      <span className="text-primary font-bold">Gratis</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      Videollamada de 15 min para dudas básicas
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      15 minutos
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleStripePayment}
                  variant="outline" 
                  className="w-full mt-6"
                  size="lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pagar reserva (50€)
                </Button>
              </div>

              {/* Security Info */}
              <div className="bg-accent p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-foreground">Pago seguro</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Encriptación SSL de nivel bancario</li>
                  <li>✓ Procesado por Stripe (usado por Uber, Airbnb...)</li>
                  <li>✓ Reembolso completo si cancelas con 24h</li>
                  <li>✓ Sin datos de tarjeta almacenados</li>
                </ul>
              </div>

              {/* Contact Alternative */}
              <div className="text-center p-6 bg-card rounded-xl border">
                <p className="text-muted-foreground mb-4">
                  ¿Prefieres llamar o WhatsApp?
                </p>
                <div className="space-y-2">
                  <a 
                    href="tel:+34971123456" 
                    className="block text-primary font-semibold hover:text-primary-glow transition-colors"
                  >
                    📞 971 12 34 56
                  </a>
                  <a 
                    href="https://wa.me/34971123456" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary font-semibold hover:text-primary-glow transition-colors"
                  >
                    💬 WhatsApp: 971 12 34 56
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;