import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

// Datos simulados para before/after
const beforeAfterData = [
  {
    id: 1,
    treatment: "Toxina botulínica",
    before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face",
    description: "Suavizado natural de líneas de expresión"
  },
  {
    id: 2,
    treatment: "Ácido hialurónico",
    before: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop&crop=face",
    after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    description: "Volumen natural y hidratación labial"
  },
  {
    id: 3,
    treatment: "Skin boosters",
    before: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=400&fit=crop&crop=face",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
    description: "Mejora de textura e hidratación"
  }
];

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setShowBefore(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setShowBefore(true);
  };

  const currentImage = beforeAfterData[currentIndex];

  return (
    <section className="py-20 bg-mares-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            <span className="text-primary font-medium">Resultados</span> naturales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la transformación sutil y elegante que logra la medicina estética
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-strong">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={showBefore ? currentImage.before : currentImage.after}
                    alt={`${showBefore ? 'Antes' : 'Después'} del tratamiento de ${currentImage.treatment}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
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

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-general-bold text-foreground mb-2">
                    {currentImage.treatment}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {currentImage.description}
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3">Características del resultado:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Natural y armónico
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Respeta la expresión facial
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Duradero y seguro
                    </li>
                  </ul>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={prevSlide}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>
                  
                  <div className="flex space-x-2">
                    {beforeAfterData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setShowBefore(true);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>

                  <Button variant="outline" onClick={nextSlide}>
                    Siguiente
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Nota legal */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                * Los resultados pueden variar según cada paciente. Las imágenes mostradas han sido autorizadas por las pacientes para fines educativos. 
                No se garantizan resultados idénticos ya que cada caso es único.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;