import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import consultaMedicinaEsteticaImg from "@/assets/tratamientos/consulta-medicina-estetica.webp";
import botoxImg from "@/assets/tratamientos/botox.webp";
import skinboosterImg from "@/assets/tratamientos/skinbooster.webp";
import TreatmentModal from "@/components/TreatmentModal";
import { getTreatmentById, Treatment } from "@/data/treatments";

interface ServicesProps {
  showAllTreatmentsButton?: boolean;
  title?: string;
  titleHighlight?: string;
}

const Services = ({
  showAllTreatmentsButton = false,
  title = "Tratamientos",
  titleHighlight = "más solicitados"
}: ServicesProps) => {
  const navigate = useNavigate();
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleServiceClick = (serviceId: string) => {
    const treatment = getTreatmentById(serviceId);
    if (treatment) {
      setSelectedTreatment(treatment);
      setModalOpen(true);
    }
  };

  return (
    <section id="servicios" className="py-16 lg:py-20 2xl:py-24 bg-background">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 lg:mb-16 fade-in-up animate">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light text-foreground mb-4 md:mb-6">
            {title} <span className="text-primary font-medium">{titleHighlight}</span>
          </h2>
          <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground max-w-2xl 2xl:max-w-3xl mx-auto">
            Técnicas avanzadas con resultados naturales para realzar tu belleza única
          </p>
        </div>

        {/* Bento Grid Layout - 2x3 alternando color/imagen */}
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px] 2xl:auto-rows-[280px]">
          
          {/* Consulta Medicina Estética - IMAGEN */}
          <button onClick={() => handleServiceClick('consulta-medicina-estetica')} className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift">
            <img src={consultaMedicinaEsteticaImg} alt="Consulta de medicina estética" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:bg-black/70 transition-all duration-300 flex group-hover:items-center items-end p-4 md:p-6 group-hover:justify-center justify-start">
              <div className="group-hover:text-center text-left transition-all duration-300">
                <h3 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-general-bold mb-0 group-hover:mb-3 transition-all duration-300">Consulta de valoración de medicina estética</h3>
                <p className="text-white/0 group-hover:text-white/90 text-sm 2xl:text-base h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:mb-2">
                  Primera consulta para evaluar tus necesidades
                </p>
                <span className="text-white/0 group-hover:text-white text-sm 2xl:text-base font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden">
                  Saber más
                </span>
              </div>
            </div>
          </button>

          {/* Consulta Capilar - COLOR */}
          <button onClick={() => handleServiceClick('consulta-capilar')} className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift bg-primary">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex group-hover:items-center items-end p-4 md:p-6 group-hover:justify-center justify-start">
              <div className="group-hover:text-center text-left transition-all duration-300">
                <h3 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-general-bold mb-0 group-hover:mb-3 transition-all duration-300">Consulta de valoración capilar</h3>
                <p className="text-white/0 group-hover:text-white/90 text-sm 2xl:text-base h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:mb-2">
                  Diagnóstico especializado de tu cabello
                </p>
                <span className="text-white/0 group-hover:text-white text-sm 2xl:text-base font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden">
                  Saber más
                </span>
              </div>
            </div>
          </button>

          {/* Neuromoduladores - IMAGEN */}
          <button onClick={() => handleServiceClick('neuromoduladores')} className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift">
            <img src={botoxImg} alt="Neuromoduladores" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:bg-black/70 transition-all duration-300 flex group-hover:items-center items-end p-4 md:p-6 group-hover:justify-center justify-start">
              <div className="group-hover:text-center text-left transition-all duration-300">
                <h3 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-general-bold mb-0 group-hover:mb-3 transition-all duration-300">Neuromoduladores</h3>
                <p className="text-white/0 group-hover:text-white/90 text-sm 2xl:text-base h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:mb-2">
                  Arrugas de expresión con resultados naturales
                </p>
                <span className="text-white/0 group-hover:text-white text-sm 2xl:text-base font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden">
                  Saber más
                </span>
              </div>
            </div>
          </button>

          {/* Tratamiento de labios - COLOR */}
          <button onClick={() => handleServiceClick('tratamiento-labios')} className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift bg-secondary">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex group-hover:items-center items-end p-4 md:p-6 group-hover:justify-center justify-start">
              <div className="group-hover:text-center text-left transition-all duration-300">
                <h3 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-general-bold mb-0 group-hover:mb-3 transition-all duration-300">Tratamiento de labios</h3>
                <p className="text-white/0 group-hover:text-white/90 text-sm 2xl:text-base h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:mb-2">
                  Realza y define tus labios naturalmente
                </p>
                <span className="text-white/0 group-hover:text-white text-sm 2xl:text-base font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden">
                  Saber más
                </span>
              </div>
            </div>
          </button>

          {/* Skinboosters - IMAGEN */}
          <button onClick={() => handleServiceClick('skin-boosters')} className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift">
            <img src={skinboosterImg} alt="Skinboosters" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:bg-black/70 transition-all duration-300 flex group-hover:items-center items-end p-4 md:p-6 group-hover:justify-center justify-start">
              <div className="group-hover:text-center text-left transition-all duration-300">
                <h3 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-general-bold mb-0 group-hover:mb-3 transition-all duration-300">Skinboosters</h3>
                <p className="text-white/0 group-hover:text-white/90 text-sm 2xl:text-base h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:mb-2">
                  Hidratación profunda para luminosidad natural
                </p>
                <span className="text-white/0 group-hover:text-white text-sm 2xl:text-base font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden">
                  Saber más
                </span>
              </div>
            </div>
          </button>

          {/* Rutina Dermocosmética - COLOR */}
          <button onClick={() => handleServiceClick('rutina-dermocosmetica')} className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift bg-[hsl(var(--primary-medium))]">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex group-hover:items-center items-end p-4 md:p-6 group-hover:justify-center justify-start">
              <div className="group-hover:text-center text-left transition-all duration-300">
                <h3 className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-general-bold mb-0 group-hover:mb-3 transition-all duration-300">Rutina dermocosmética individualizada</h3>
                <p className="text-white/0 group-hover:text-white/90 text-sm 2xl:text-base h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:mb-2">
                  Protocolo personalizado para tu día a día
                </p>
                <span className="text-white/0 group-hover:text-white text-sm 2xl:text-base font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden">
                  Saber más
                </span>
              </div>
            </div>
          </button>

        </div>

        {showAllTreatmentsButton && (
          <div className="flex justify-center mt-10 md:mt-12">
            <Button 
              onClick={() => navigate('/tratamientos')} 
              variant="default" 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto rounded-full"
            >
              Descubre todos los tratamientos
            </Button>
          </div>
        )}
      </div>

      <TreatmentModal treatment={selectedTreatment} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Services;