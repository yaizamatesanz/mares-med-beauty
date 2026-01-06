import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import AllTreatmentsGrid from "@/components/AllTreatmentsGrid";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Tratamientos = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-8 md:py-10 lg:py-14 2xl:py-16 bg-background">
          <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light text-foreground mb-4 md:mb-6">
              Tratamientos de <span className="text-primary font-medium">medicina estética</span>
            </h1>
            <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground max-w-2xl 2xl:max-w-3xl mx-auto">
              Descubre nuestra amplia gama de tratamientos personalizados para realzar tu belleza natural
            </p>
          </div>
        </section>

        {/* Todos los tratamientos */}
        <AllTreatmentsGrid />

        {/* FAQ Section */}
        <FAQ />
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
            <div className="max-w-2xl 2xl:max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-light text-foreground">
                ¿Lista para comenzar tu <span className="text-primary font-medium">transformación?</span>
              </h3>
              <p className="text-base md:text-lg 2xl:text-xl text-muted-foreground">
                Agenda tu primera consulta y descubre qué tratamiento es perfecto para ti
              </p>
              <Button 
                onClick={() => navigate('/contacto')} 
                className="cta-premium text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto rounded-full"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Pedir cita
              </Button>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <FinalCTA />

        <Footer />
      </div>
    </div>
  );
};

export default Tratamientos;