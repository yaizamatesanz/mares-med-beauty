import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TreatmentDetailProps {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  beforeImage?: string;
  afterImage?: string;
  duration?: string;
  recovery?: string;
  results?: string;
}

const TreatmentDetail = ({
  id,
  icon: Icon,
  title,
  description,
  longDescription,
  benefits,
  beforeImage,
  afterImage,
  duration,
  recovery,
  results
}: TreatmentDetailProps) => {
  const [showBefore, setShowBefore] = useState(true);
  const navigate = useNavigate();
  const hasImages = beforeImage && afterImage;

  return (
    <section id={id} className="py-20 scroll-mt-20 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in-up animate">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon className="h-10 w-10 text-primary" />
              <h3 className="text-3xl lg:text-4xl font-light text-foreground">
                {title}
              </h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-general-bold text-foreground mb-4">
                  ¿En qué consiste?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-general-bold text-foreground mb-4">
                  Beneficios principales
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {duration && (
                  <div className="bg-card p-4 rounded-xl border">
                    <p className="text-sm text-muted-foreground mb-1">Duración</p>
                    <p className="font-semibold text-foreground">{duration}</p>
                  </div>
                )}
                {recovery && (
                  <div className="bg-card p-4 rounded-xl border">
                    <p className="text-sm text-muted-foreground mb-1">Recuperación</p>
                    <p className="font-semibold text-foreground">{recovery}</p>
                  </div>
                )}
                {results && (
                  <div className="bg-card p-4 rounded-xl border">
                    <p className="text-sm text-muted-foreground mb-1">Resultados</p>
                    <p className="font-semibold text-foreground">{results}</p>
                  </div>
                )}
              </div>

              <Button 
                onClick={() => navigate('/contacto')}
                className="cta-premium text-lg px-8 py-6 h-auto w-full sm:w-auto"
              >
                Pedir cita
              </Button>
            </div>

            {/* Image Section */}
            {hasImages ? (
              <div className="lg:sticky lg:top-24">
                <div className="bg-card rounded-2xl p-6 shadow-strong">
                  <h3 className="text-xl font-general-bold text-foreground mb-4 text-center">
                    Resultados reales
                  </h3>
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={showBefore ? beforeImage : afterImage}
                        alt={`${showBefore ? 'Antes' : 'Después'} del tratamiento de ${title}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                          {showBefore ? 'Antes' : 'Después'}
                        </span>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowBefore(!showBefore)}
                      className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Ver {showBefore ? 'después' : 'antes'}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    * Los resultados pueden variar según cada paciente.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-2xl p-12 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Consulta para ver resultados personalizados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentDetail;
