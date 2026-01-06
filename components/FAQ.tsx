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
    answer: "Depende del tratamiento: el ácido hialurónico muestra resultados inmediatos, la toxina botulínica a partir del 3º día hasta el 14º día, y los skin boosters mejoran progresivamente durante 2-3 semanas. Te explicaremos los tiempos específicos en cada caso."
  },
  {
    id: 4,
    question: "¿Quién me realizará el tratamiento?",
    answer: "Todos los tratamientos son realizados personalmente por la Dra. Daniela Bueno Ventura, médica colegiada especializada en medicina estética. No delegamos ningún procedimiento en personal no médico."
  },
  {
    id: 5,
    question: "¿Cuánto duran los efectos?",
    answer: "La toxina botulínica dura 3-5 meses, el ácido hialurónico 6-18 meses según la zona, y los skin boosters 6-9 meses. Los resultados son graduales y naturales, sin cambios bruscos al desvanecerse."
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
    <section className="py-16 lg:py-20 2xl:py-24 bg-white">
      <div className="w-[95%] max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 lg:mb-16 fade-in-up animate">
          <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light text-foreground mb-4 md:mb-6">
            Preguntas <span className="text-primary font-medium">frecuentes</span>
          </h3>
          <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground max-w-2xl 2xl:max-w-3xl mx-auto">
            Resolvemos todas tus dudas sobre medicina estética y nuestros tratamientos
          </p>
        </div>

        <div className="max-w-4xl 2xl:max-w-5xl mx-auto space-y-3 md:space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card rounded-xl md:rounded-2xl shadow-soft overflow-hidden hover-lift fade-in-up animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-base md:text-lg 2xl:text-xl font-semibold text-foreground pr-4">
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
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="divider-mares mb-3 md:mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base 2xl:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;