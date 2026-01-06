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
  return <section className="relative -mt-32 z-20">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto bg-card rounded-2xl shadow-xl px-8 py-6 lg:px-12 lg:py-8 xl:px-16 xl:py-10 2xl:px-20 2xl:py-12 fade-in-up animate">
          <div className="text-center mb-8 xl:mb-10">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-foreground mb-4 xl:mb-6">
              Por qué elegir <span className="text-primary font-medium">Clínica Marès</span>
            </h3>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experiencia, naturalidad y confianza en cada tratamiento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 xl:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-3 xl:space-y-4 p-4 xl:p-6 bg-card rounded-xl" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <div className="flex items-center justify-center mx-auto mb-2">
                  <feature.icon className="h-10 w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-general-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base xl:text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;