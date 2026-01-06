import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
const AppointmentCTA = () => {
  const navigate = useNavigate();
  return <section className="py-20 xl:py-28 2xl:py-32 bg-background">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6">
        <div className="max-w-5xl xl:max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-general-bold text-foreground mb-6 xl:mb-8">
            Reserva tu cita con nosotros
          </h3>
          <p className="text-lg xl:text-xl text-foreground/80 mb-12 xl:mb-16 leading-relaxed">
            El primer paso hacia tu transformación comienza aquí.<br />
            Selecciona el día y hora que mejor se adapte a ti.
          </p>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-10 mb-12 xl:mb-16">
            <div className="flex flex-col items-center p-6 xl:p-8 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
              <Calendar className="h-12 w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 text-primary mb-4 xl:mb-6" />
              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-general-bold text-foreground mb-2">
                Elige tu fecha
              </h3>
              <p className="text-sm lg:text-base xl:text-lg text-foreground/70">
                Selecciona el día 
que mejor te convenga
              </p>
            </div>

            <div className="flex flex-col items-center p-6 xl:p-8 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
              <Clock className="h-12 w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 text-primary mb-4 xl:mb-6" />
              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-general-bold text-foreground mb-2">
                Horario flexible
              </h3>
              <p className="text-sm lg:text-base xl:text-lg text-foreground/70">
                Disponibilidad de lunes a sábado
              </p>
            </div>

            <div className="flex flex-col items-center p-6 xl:p-8 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
              <CheckCircle className="h-12 w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 text-primary mb-4 xl:mb-6" />
              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-general-bold text-foreground mb-2">
                Confirmación inmediata
              </h3>
              <p className="text-sm lg:text-base xl:text-lg text-foreground/70">
                Te confirmaremos 
tu cita rápidamente
              </p>
            </div>
          </div>

          <Button onClick={() => navigate('/reservar-cita')} size="lg" className="cta-premium rounded-full text-lg xl:text-xl 2xl:text-2xl px-12 xl:px-16 py-6 xl:py-8 h-auto">
            Reservar mi cita ahora
          </Button>

          
        </div>
      </div>
    </section>;
};
export default AppointmentCTA;