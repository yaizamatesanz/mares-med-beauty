import { Award, GraduationCap, Heart, MapPin } from "lucide-react";
import doctorImage from "@/assets/doctor-profile.jpg";
const Team = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Nuestro <span className="text-primary font-medium">equipo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionales especializados comprometidos con tu bienestar y belleza natural
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-strong">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative fade-in-up animate">
                <img src={doctorImage} alt="Dra. Daniela Bueno - Especialista en Medicina Estética" className="w-full max-w-md mx-auto rounded-2xl hover-lift" />
                
              </div>

              <div className="space-y-8 fade-in-up animate" style={{
              animationDelay: '200ms'
            }}>
                <div className="space-y-4">
                  <h3 className="text-4xl font-general-bold text-foreground">
                    Dra. Daniela Bueno
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Colegiada nº 35/3456 - Colegio de Médicos de Las Palmas</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Mi filosofía se basa en realzar la belleza natural de cada paciente, 
                  como las vetas únicas de la piedra marès. Creo en la medicina estética 
                  como arte de la sutileza, donde menos es más y la naturalidad es el objetivo."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-accent rounded-xl">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Formación</h4>
                    <p className="text-sm text-muted-foreground">
                      Licenciada en Medicina<br />
                      Universidad de Barcelona
                    </p>
                  </div>

                  <div className="text-center p-4 bg-accent rounded-xl">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Especialización</h4>
                    <p className="text-sm text-muted-foreground">
                      Medicina Estética<br />
                      Universidad Complutense
                    </p>
                  </div>

                  <div className="text-center p-4 bg-accent rounded-xl">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Experiencia</h4>
                    <p className="text-sm text-muted-foreground">
                      +5 años<br />
                      +500 pacientes
                    </p>
                  </div>
                </div>

                

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Team;