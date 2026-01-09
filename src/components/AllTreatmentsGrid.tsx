import { useState, useEffect } from "react";
import { getAllTreatments, Treatment } from "@/data/treatments";
import TreatmentModal from "@/components/TreatmentModal";

const AllTreatmentsGrid = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [columns, setColumns] = useState(4);
  const allTreatments = getAllTreatments();

  // Detectar número de columnas según el breakpoint
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(2); // mobile
      } else if (window.innerWidth < 1024) {
        setColumns(3); // tablet
      } else {
        setColumns(4); // desktop
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const handleTreatmentClick = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setModalOpen(true);
  };

  // Colores de la paleta para alternar
  const colors = [
    "bg-primary", 
    "bg-secondary", 
    "bg-[hsl(var(--primary-medium))]"
  ];

  // Función para determinar si es imagen o color (patrón ajedrez real responsive)
  const getCardStyle = (index: number, treatment: Treatment) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const isImage = (row + col) % 2 === 0; // Ajedrez: suma par = imagen, impar = color
    
    if (isImage && treatment.image) {
      return { type: 'image', image: treatment.image };
    } else {
      const colorIndex = index % colors.length;
      return { type: 'color', color: colors[colorIndex] };
    }
  };

  return (
    <section className="py-10 lg:py-16 2xl:py-20 bg-muted/30">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {allTreatments.map((treatment, index) => {
            const cardStyle = getCardStyle(index, treatment);
            const cardBaseClass = "w-[calc(50%-6px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] h-[160px] md:h-[180px] lg:h-[200px] 2xl:h-[240px]";
            
            if (cardStyle.type === 'image') {
              return (
                <button
                  key={treatment.id}
                  onClick={() => handleTreatmentClick(treatment)}
                  className={`${cardBaseClass} group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift`}
                >
                  <img 
                    src={cardStyle.image} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/70 transition-all duration-300 flex group-hover:items-center items-end p-3 md:p-5 group-hover:justify-center justify-start">
                    <div className="group-hover:text-center text-left transition-all duration-300">
                      <h3 className="text-white text-xs md:text-sm lg:text-base font-general-bold leading-tight mb-0 group-hover:mb-2 transition-all duration-300 line-clamp-2">
                        {treatment.title}
                      </h3>
                      <p className="text-white/0 group-hover:text-white/90 text-xs h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden line-clamp-2 hidden md:block">
                        {treatment.description}
                      </p>
                      <span className="text-white/0 group-hover:text-white text-xs font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden mt-1 md:mt-2">
                        Saber más
                      </span>
                    </div>
                  </div>
                </button>
              );
            } else {
              return (
                <button
                  key={treatment.id}
                  onClick={() => handleTreatmentClick(treatment)}
                  className={`${cardBaseClass} group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift ${cardStyle.color}`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex group-hover:items-center items-end p-3 md:p-5 group-hover:justify-center justify-start">
                    <div className="group-hover:text-center text-left transition-all duration-300">
                      <h3 className="text-white text-xs md:text-sm lg:text-base font-general-bold leading-tight mb-0 group-hover:mb-2 transition-all duration-300 line-clamp-2">
                        {treatment.title}
                      </h3>
                      <p className="text-white/0 group-hover:text-white/90 text-xs h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden line-clamp-2 hidden md:block">
                        {treatment.description}
                      </p>
                      <span className="text-white/0 group-hover:text-white text-xs font-medium h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 underline block overflow-hidden mt-1 md:mt-2">
                        Saber más
                      </span>
                    </div>
                  </div>
                </button>
              );
            }
          })}
        </div>
      </div>

      <TreatmentModal 
        treatment={selectedTreatment} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />
    </section>
  );
};

export default AllTreatmentsGrid;
