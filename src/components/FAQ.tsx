import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    id: 1,
    question: "¿Duelen los tratamientos?",
    answer: "La mayoría de nuestros tratamientos son prácticamente indoloros. Utilizamos técnicas avanzadas de anestesia tópica y agujas ultrafinas. Para tratamientos como la toxina botulínica, la molestia es mínima y comparable a un pequeño pellizco que dura segundos."
  },
  {
    id: 2,
    question: "¿Se nota que me he hecho algo? ¿Parece artificial?",
    answer: "Nuestra filosofía se basa en la naturalidad absoluta. Trabajamos con técnicas conservadoras que realzan tu belleza natural sin cambiar tu expresión facial. El objetivo es que te veas mejor, pero que nadie sepa exactamente por qué."
  },
  {
    id: 3,
    question: "¿Cuándo se ven los resultados?",
    answer: "Depende del tratamiento: el ácido hialurónico muestra resultados inmediatos, la toxina botulínica en 3-7 días, y los skin boosters mejoran progresivamente durante 2-3 semanas. Te explicaremos los tiempos específicos en cada caso."
  },
  {
    id: 4,
    question: "¿Quién me realizará el tratamiento?",
    answer: "Todos los tratamientos son realizados personalmente por la Dra. Marina Castell, médica colegiada especializada en medicina estética. No delegamos ningún procedimiento en personal no médico."
  },
  {
    id: 5,
    question: "¿Cuánto duran los efectos?",
    answer: "La toxina botulínica dura 4-6 meses, el ácido hialurónico 6-18 meses según la zona, y los skin boosters 6-9 meses. Los resultados son graduales y naturales, sin cambios bruscos al desvanecerse."
  },
  {
    id: 6,
    question: "¿Qué cuidados necesito después?",
    answer: "Los cuidados post-tratamiento son mínimos. Generalmente evitar ejercicio intenso 24h, no tocar la zona tratada las primeras horas, y aplicar protección solar diaria. Te daremos instrucciones específicas por escrito."
  },
  {
    id: 7,
    question: "¿Puedo hacer vida normal después?",
    answer: "Sí, puedes hacer vida completamente normal. Nuestros tratamientos no requieren baja laboral ni social. Puedes volver al trabajo inmediatamente, aunque recomendamos evitar ejercicio intenso las primeras 24 horas."
  },
  {
    id: 8,
    question: "¿Qué pasa si no me gusta el resultado?",
    answer: "Trabajamos con productos reversibles cuando es posible. El ácido hialurónico puede disolverse completamente si fuera necesario. Además, ofrecemos revisiones gratuitas durante el primer mes para ajustar cualquier detalle."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // Primer item abierto por defecto

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-mares-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Preguntas <span className="text-primary font-medium">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre medicina estética y nuestros tratamientos
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card rounded-2xl shadow-soft overflow-hidden hover-lift fade-in-up animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-6 pb-6">
                  <div className="divider-mares mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-cormorant font-semibold text-foreground mb-4">
              ¿No encuentras tu respuesta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta gratuita online o contáctanos por WhatsApp. 
              Estaremos encantadas de resolver todas tus dudas personalmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34971123456"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary text-center"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+34971123456"
                className="cta-premium text-center"
              >
                📞 Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;