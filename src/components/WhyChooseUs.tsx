import { Award, Heart, UserCheck } from "lucide-react";
const features = [{
  icon: UserCheck,
  title: "Médica especialista",
  description: "Doctora colegiada con formación específica en medicina estética y años de experiencia."
}, {
  icon: Heart,
  title: "Resultados naturales",
  description: "Filosofía de realce natural que respeta tu belleza única sin artificialidad."
}, {
  icon: Award,
  title: "Protocolos personalizados",
  description: "Cada tratamiento se adapta a tus necesidades específicas y objetivos estéticos."
}];
const WhyChooseUs = () => {
  return <section className="py-20 bg-white">
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
          {features.map((feature, index) => <div key={index} className="text-center space-y-6 p-8 bg-card rounded-2xl hover-lift fade-in-up animate" style={{
          animationDelay: `${index * 200}ms`
        }}>
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-general-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default WhyChooseUs;