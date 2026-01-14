import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import consultaMedicinaEsteticaImg from "@/assets/tratamientos/consulta-medicina-estetica.webp";
import consultaCapilarImg from "@/assets/tratamientos/consulta-capilar.webp";
import botoxImg from "@/assets/tratamientos/botox.webp";
import skinboosterImg from "@/assets/tratamientos/skinbooster.webp";
import tratamientoLabiosImg from "@/assets/tratamientos/tratamiento-labios.webp";
import rutinaImg from "@/assets/tratamientos/rutina-dermocosmetica.webp";
import TreatmentModal from "@/components/TreatmentModal";
import { getTreatmentById, Treatment } from "@/data/treatments";

interface ServicesProps {
  showAllTreatmentsButton?: boolean;
  title?: string;
  titleHighlight?: string;
}

const featuredTreatments = [
  { id: 'consulta-medicina-estetica', title: 'Consulta de valoración de medicina estética', description: 'Primera consulta para evaluar tus necesidades', image: consultaMedicinaEsteticaImg },
  { id: 'consulta-capilar', title: 'Consulta de valoración capilar', description: 'Diagnóstico especializado de tu cabello', image: consultaCapilarImg },
  { id: 'rutina-dermocosmetica', title: 'Rutina dermocosmética individualizada', description: 'Protocolo personalizado para tu día a día', image: rutinaImg },
  { id: 'neuromoduladores', title: 'Neuromoduladores en tercio superior', description: 'Arrugas de expresión con resultados naturales', image: botoxImg },
  { id: 'bruxismo', title: 'Bruxismo', description: 'Tratamiento para el bruxismo', image: null },
  { id: 'hiperhidrosis', title: 'Hiperhidrosis', description: 'Tratamiento para sudoración excesiva', image: botoxImg },
];

const colors = [
  "bg-primary", 
  "bg-secondary", 
  "bg-[hsl(var(--primary-medium))]"
];

const Services = ({
  showAllTreatmentsButton = false,
  title = "Tratamientos",
  titleHighlight = "más solicitados"
}: ServicesProps) => {
  const navigate = useNavigate();
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [columns, setColumns] = useState(3);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  React.useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  const handleServiceClick = (serviceId: string) => {
    const treatment = getTreatmentById(serviceId);
    if (treatment) {
      setSelectedTreatment(treatment);
      setModalOpen(true);
    }
  };

  const getCardStyle = (index: number, image: string | null) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const isImage = (row + col) % 2 === 0;
    
    if (isImage && image) {
      return { type: 'image', image };
    } else {
      const colorIndex = index % colors.length;
      return { type: 'color', color: colors[colorIndex] };
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

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {featuredTreatments.map((treatment, index) => {
                const cardStyle = getCardStyle(index, treatment.image);
                
                return (
                  <CarouselItem key={treatment.id} className="pl-3 basis-[85%]">
                    <button
                      onClick={() => handleServiceClick(treatment.id)}
                      className={`w-full h-[200px] group relative overflow-hidden rounded-xl hover-lift ${
                        cardStyle.type === 'color' ? cardStyle.color : ''
                      }`}
                    >
                      {cardStyle.type === 'image' && (
                        <img 
                          src={cardStyle.image} 
                          alt={treatment.title} 
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className={`absolute inset-0 flex items-end p-4 ${
                        cardStyle.type === 'image' ? 'bg-gradient-to-t from-black/60 to-transparent' : ''
                      }`}>
                        <div>
                          <h3 className="text-white text-base font-general-bold leading-tight mb-1">
                            {treatment.title}
                          </h3>
                          <p className="text-white/80 text-sm line-clamp-2">
                            {treatment.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {featuredTreatments.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? 'w-6 bg-primary' 
                    : 'w-2 bg-primary/30'
                }`}
                aria-label={`Ir al tratamiento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Bento Grid Layout original 3 columnas */}
        <div className="hidden md:grid max-w-6xl 2xl:max-w-7xl mx-auto grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] lg:auto-rows-[220px] 2xl:auto-rows-[280px]">
          
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