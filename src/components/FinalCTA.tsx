import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import maresTexture from "@/assets/mares-texture.jpg";

const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCitas = () => {
    const element = document.getElementById('citas');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Mares texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${maresTexture})`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto fade-in-up animate">
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="h-10 w-10 text-primary-foreground" />
            </div>

            {/* Headline */}
            <h2 className="text-5xl lg:text-7xl font-general-bold text-primary-foreground leading-tight">
              Listas para ver tu<br />
              <span className="font-semibold">mejor versión</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              La belleza natural que siempre has deseado te está esperando. 
              Como la piedra marès, tu transformación será sutil, elegante y auténtica.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                onClick={scrollToCitas}
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold group shadow-strong"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Pedir cita online
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <a
                href="https://wa.me/34971123456?text=Hola, me gustaría información sobre tratamientos en Clínica Marès"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
                >
                  💬 WhatsApp directo
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-general-bold text-primary-foreground mb-2">500+</div>
                <div className="text-primary-foreground/80">Mujeres confiaron en nosotras</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-general-bold text-primary-foreground mb-2">4.9★</div>
                <div className="text-primary-foreground/80">Valoración en Google</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-general-bold text-primary-foreground mb-2">98%</div>
                <div className="text-primary-foreground/80">Nos recomiendan</div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl max-w-2xl mx-auto border border-primary-foreground/20">
              <p className="text-primary-foreground/90 text-center">
                <strong>Garantía de satisfacción:</strong> Si no estás completamente satisfecha con tu resultado, 
                te ofrecemos retoque gratuito o reembolso completo en los primeros 30 días.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary-foreground/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default FinalCTA;