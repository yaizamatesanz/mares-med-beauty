import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, Check, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Treatment } from "@/data/treatments";

interface TreatmentModalProps {
  treatment: Treatment | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TreatmentModal = ({ treatment, open, onOpenChange }: TreatmentModalProps) => {
  const [showBefore, setShowBefore] = useState(true);
  const navigate = useNavigate();

  if (!treatment) return null;

  const hasImages = treatment.beforeImage && treatment.afterImage;
  const Icon = treatment.icon;

  const handleBookAppointment = () => {
    onOpenChange(false);
    navigate('/contacto');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`w-[95vw] ${hasImages ? 'max-w-4xl' : 'max-w-2xl'} max-h-[90vh] overflow-y-auto bg-background p-4 md:p-6`}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl lg:text-3xl">
            <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
            <span className="line-clamp-2">{treatment.title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6">
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground">{treatment.description}</p>

          <div className={`grid grid-cols-1 ${hasImages ? 'lg:grid-cols-2' : ''} gap-6 md:gap-8`}>
            {/* Content Section */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-general-bold text-foreground mb-2 md:mb-3">
                  ¿En qué consiste?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {treatment.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-general-bold text-foreground mb-2 md:mb-3">
                  Beneficios principales
                </h3>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Info - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                {treatment.duration && (
                  <div className="bg-card p-3 rounded-lg border">
                    <p className="text-xs text-muted-foreground mb-1">Intervención</p>
                    <p className="font-semibold text-foreground text-sm">{treatment.duration}</p>
                  </div>
                )}
                {treatment.recovery && (
                  <div className="bg-card p-3 rounded-lg border">
                    <p className="text-xs text-muted-foreground mb-1">Recuperación</p>
                    <p className="font-semibold text-foreground text-sm">{treatment.recovery}</p>
                  </div>
                )}
                {treatment.results && (
                  <div className="bg-card p-3 rounded-lg border">
                    <p className="text-xs text-muted-foreground mb-1">Resultados</p>
                    <p className="font-semibold text-foreground text-sm">{treatment.results}</p>
                  </div>
                )}
              </div>

              <Button 
                onClick={handleBookAppointment}
                className="cta-premium px-4 md:px-6 py-4 md:py-5 h-auto w-full text-sm md:text-base"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Pedir cita
              </Button>
            </div>

            {/* Before/After Section */}
            {hasImages && (
              <div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-general-bold text-foreground">
                      Resultados reales
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowBefore(!showBefore)}
                      className="gap-2 text-xs md:text-sm"
                    >
                      <Eye className="h-4 w-4" />
                      {showBefore ? "Ver después" : "Ver antes"}
                    </Button>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-muted">
                    <img
                      src={showBefore ? treatment.beforeImage : treatment.afterImage}
                      alt={showBefore ? "Antes del tratamiento" : "Después del tratamiento"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                      {showBefore ? "Antes" : "Después"}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Los resultados pueden variar según cada persona
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TreatmentModal;