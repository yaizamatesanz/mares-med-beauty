import { Award, GraduationCap, Heart } from "lucide-react";
import doctorImage from "@/assets/dra-daniela-bueno.webp";

const Team = () => {
  return (
    <section className="py-16 lg:py-20 xl:py-28 2xl:py-32 bg-card">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
          <div className="relative fade-in-up animate max-w-sm md:max-w-md mx-auto lg:mx-0">
            <img 
              src={doctorImage} 
              alt="Dra. Daniela Bueno - Especialista en Medicina Estética" 
              className="w-full h-auto rounded-2xl hover-lift object-cover" 
            />
          </div>

          <div className="space-y-6 md:space-y-8 xl:space-y-10 fade-in-up animate" style={{ animationDelay: '200ms' }}>
            <div className="space-y-3 md:space-y-4 xl:space-y-6">
              <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-general-bold text-foreground">
                Dra. Daniela Bueno Ventura
              </h3>
              <p className="text-primary font-medium text-base lg:text-lg 2xl:text-xl">
                Doctora especialista
              </p>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg 2xl:text-xl">
                Doctora colegiada con formación específica en medicina estética y capilar
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base lg:text-lg">
                <Award className="h-4 w-4 xl:h-5 xl:w-5 text-primary" />
                <span>Socia de la SEME nº 2898</span>
              </div>
            </div>

            <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground leading-relaxed">
              "Mi filosofía se basa en realzar la belleza natural de cada paciente, 
              como las vetas únicas de la piedra marès. Creo en la medicina estética 
              como arte de la sutileza, donde menos es más y la naturalidad es el objetivo."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-5 bg-background rounded-xl">
                <GraduationCap className="h-7 w-7 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-3" />
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Formación</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Graduada en Medicina<br />
                  Universidad de Las Palmas de Gran Canaria
                </p>
              </div>

              <div className="text-center p-4 md:p-5 bg-background rounded-xl">
                <Award className="h-7 w-7 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-3" />
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Especialización</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Máster Med. Estética (AMIR)<br />
                  Máster Tricología (AMIR)<br />
                  Máster Dermatología (CEU)
                </p>
              </div>

              <div className="text-center p-4 md:p-5 bg-background rounded-xl">
                <Heart className="h-7 w-7 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-3" />
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Experiencia</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  +5 años<br />
                  +500 pacientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;