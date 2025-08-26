import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María G.",
    location: "Mahón",
    rating: 5,
    text: "Resultados naturales, nadie nota 'el qué', solo que me veo genial. La Dra. Castell tiene una mano increíble y te explica todo con mucha paciencia.",
    treatment: "Toxina botulínica + Ácido hialurónico"
  },
  {
    id: 2,
    name: "Carmen S.",
    location: "Ciutadella",
    rating: 5,
    text: "Llevaba años pensándolo y por fin me animé. El resultado ha superado mis expectativas. Me siento más segura y el trato ha sido excepcional.",
    treatment: "Skin boosters"
  },
  {
    id: 3,
    name: "Laura M.",
    location: "Es Castell",
    rating: 5,
    text: "Lo que más me gusta es que respeta completamente tu fisonomía. No cambias, simplemente te ves mejor. La clínica es preciosa y muy profesional.",
    treatment: "Peeling médico + Rejuvenecimiento"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-mares-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Lo que dicen nuestras <span className="text-primary font-medium">pacientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de mujeres que han confiado en nosotras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-2xl shadow-soft hover-lift fade-in-up animate"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Treatment */}
                <div className="bg-accent p-3 rounded-lg">
                  <p className="text-sm font-medium text-foreground">
                    Tratamiento: {testimonial.treatment}
                  </p>
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-card p-8 rounded-2xl shadow-soft max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-general-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Pacientes tratadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-general-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Valoración media</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-general-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-general-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Recomendaciones</div>
            </div>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres ver más opiniones? Consulta nuestras reseñas en Google
          </p>
          <a
            href="https://www.google.com/search?q=clinica+mares+menorca+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Star className="mr-2 h-5 w-5" />
            Ver reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;