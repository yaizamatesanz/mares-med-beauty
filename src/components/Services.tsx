import { Button } from "@/components/ui/button";
import { 
  Smile,
  Droplets,
  Sparkles,
  Zap,
  Activity,
  MessageCircle
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Toxina botulínica",
    description: "Tratamiento de arrugas de expresión con resultados naturales y duraderos.",
    features: ["Sin tiempo de recuperación", "Resultados visibles en 3-7 días", "Duración 4-6 meses"]
  },
  {
    icon: Droplets,
    title: "Ácido hialurónico",
    description: "Relleno y volumen facial respetando la armonía natural del rostro.",
    features: ["Hidratación profunda", "Volumen natural", "Resultados inmediatos"]
  },
  {
    icon: Sparkles,
    title: "Skin boosters",
    description: "Hidratación intensiva que mejora la calidad y luminosidad de la piel.",
    features: ["Piel más luminosa", "Textura mejorada", "Hidratación duradera"]
  },
  {
    icon: Zap,
    title: "Peelings médicos",
    description: "Renovación celular controlada para una piel más joven y uniforme.",
    features: ["Renovación celular", "Textura uniforme", "Luminosidad natural"]
  },
  {
    icon: Activity,
    title: "Rejuvenecimiento láser",
    description: "Tecnología avanzada para estimular el colágeno y mejorar la firmeza.",
    features: ["Estimula colágeno", "Firmeza mejorada", "Sin cirugía"]
  },
  {
    icon: MessageCircle,
    title: "Asesoría médica",
    description: "Consulta personalizada para diseñar tu plan de tratamientos ideal.",
    features: ["Análisis personalizado", "Plan a medida", "Seguimiento completo"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Nuestros <span className="text-primary font-medium">tratamientos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Técnicas avanzadas con resultados naturales para realzar tu belleza única
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl border hover-lift hover-glow fade-in-up animate"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-cormorant font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Saber más
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-mares-gradient p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-cormorant font-semibold text-foreground mb-4">
              ¿No estás segura de qué tratamiento necesitas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta gratuita y diseñemos juntas tu plan personalizado
            </p>
            <Button className="cta-premium">
              <MessageCircle className="mr-2 h-5 w-5" />
              Consulta gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;