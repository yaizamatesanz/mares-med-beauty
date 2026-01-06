import { Star, Quote } from "lucide-react";
const testimonials = [{
  id: 1,
  name: "María G.",
  location: "Las Palmas de Gran Canaria",
  rating: 5,
  text: "Resultados naturales, nadie nota 'el qué', solo que me veo genial. La Dra. Bueno tiene una mano increíble y te explica todo con mucha paciencia.",
  treatment: "Toxina botulínica + Ácido hialurónico"
}, {
  id: 2,
  name: "Carmen S.",
  location: "Telde",
  rating: 5,
  text: "Llevaba años pensándolo y por fin me animé. El resultado ha superado mis expectativas. Me siento más segura y el trato ha sido excepcional.",
  treatment: "Skin boosters"
}, {
  id: 3,
  name: "Laura M.",
  location: "Arucas",
  rating: 5,
  text: "Lo que más me gusta es que respeta completamente tu fisonomía. No cambias, simplemente te ves mejor. La clínica es preciosa y muy profesional.",
  treatment: "Peeling médico + Rejuvenecimiento"
}];
const Testimonials = () => {
  return <section className="py-20 xl:py-28 2xl:py-32 bg-background">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-16 xl:mb-20 fade-in-up animate">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-foreground mb-6 xl:mb-8">
            Lo que dicen nuestras <span className="text-primary font-medium">pacientes</span>
          </h3>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de mujeres que han confiado en nosotras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto items-stretch">
          {testimonials.map((testimonial, index) => <div key={testimonial.id} className="bg-[#733F2C] p-8 xl:p-10 2xl:p-12 rounded-2xl shadow-soft hover-lift fade-in-up animate h-full flex flex-col" style={{
          animationDelay: `${index * 200}ms`
        }}>
              <div className="flex-1 flex flex-col">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 text-secondary mb-6 xl:mb-8" />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6 xl:mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 xl:h-6 xl:w-6 fill-secondary text-secondary" />)}
                </div>

                {/* Testimonial Text */}
                <p className="text-white leading-relaxed italic text-base xl:text-lg 2xl:text-xl mb-6 xl:mb-8 flex-1">
                  "{testimonial.text}"
                </p>

                {/* Treatment */}
                <div className="bg-background p-3 xl:p-4 rounded-lg mb-4">
                  <p className="text-sm lg:text-base xl:text-lg font-medium text-[#733F2C]">
                    Tratamiento: {testimonial.treatment}
                  </p>
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-secondary text-base xl:text-lg 2xl:text-xl">{testimonial.name}</p>
                  <p className="text-sm lg:text-base xl:text-lg text-white">{testimonial.location}</p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Trust Indicators */}
        

        {/* Google Reviews CTA */}
        
      </div>
    </section>;
};
export default Testimonials;