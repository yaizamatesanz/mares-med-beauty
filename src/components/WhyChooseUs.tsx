import { Award, Heart, UserCheck } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Médica especialista",
    description: "Doctora colegiada con formación específica en medicina estética y años de experiencia."
  },
  {
    icon: Heart,
    title: "Resultados naturales",
    description: "Filosofía de realce natural que respeta tu belleza única sin artificialidad."
  },
  {
    icon: Award,
    title: "Protocolos personalizados",
    description: "Cada tratamiento se adapta a tus necesidades específicas y objetivos estéticos."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Por qué elegir <span className="text-primary font-medium">Clínica Marès</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencia, naturalidad y confianza en cada tratamiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-6 p-8 bg-card rounded-2xl hover-lift fade-in-up animate"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-general-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-general-bold text-foreground">
              Nuestra filosofía
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Clínica Marès creemos que la verdadera belleza reside en la armonía natural.
              Inspirados en la piedra marès, cada tratamiento respeta la esencia única de 
              cada persona, realzando su belleza natural con técnicas científicas precisas.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="text-3xl font-general-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="text-3xl font-general-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Seguimiento</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-light to-accent p-8 rounded-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                <span className="font-medium">Pacientes satisfechos</span>
                <span className="text-2xl font-general-bold text-primary">500+</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                <span className="font-medium">Valoración media</span>
                <span className="text-2xl font-general-bold text-primary">4.9/5</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                <span className="font-medium">Años de experiencia</span>
                <span className="text-2xl font-general-bold text-primary">5+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;