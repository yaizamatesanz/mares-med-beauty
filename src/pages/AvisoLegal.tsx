import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16">
        <div className="w-[95%] max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Aviso <span className="text-primary font-medium">Legal</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Identificación del titular del sitio web</h2>
              <p>
                En cumplimiento de lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que este sitio web es propiedad de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> Clínica Marès</li>
                <li><strong>NIF/CIF:</strong> 78512273W</li>
                <li><strong>Domicilio:</strong> Calle Perdomo número 8 local 9, CP 35002, Las Palmas de Gran Canaria</li>
                <li><strong>Correo electrónico:</strong> contacto@clinicamares.com</li>
                <li><strong>Teléfono:</strong> 639 374 945</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Registro sanitario y profesionales sanitarios</h2>
              <p>
                Este centro está registrado y autorizado como clínica sanitaria:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Número de autorización:</strong> 9643</li>
                <li><strong>Autoridad competente:</strong> Las Palmas</li>
              </ul>
              <p>
                Los tratamientos médicos o estéticos son realizados exclusivamente por profesionales cualificados y colegiados:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Daniela Bueno Ventura</strong></li>
                <li>Titulación: Graduada en Medicina</li>
                <li>Nº de colegiado: 35/35/08868</li>
                <li>Colegio profesional: Las Palmas</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Objeto y condiciones de uso</h2>
              <p>
                El acceso a esta web tiene carácter informativo y promocional, ofreciendo información sobre tratamientos médicos y estéticos, servicios, instalaciones y contacto.
              </p>
              <p>El usuario se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utilizar los contenidos de manera lícita y responsable</li>
                <li>No difundir información falsa o engañosa</li>
                <li>No intentar vulnerar la seguridad del sitio</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos de esta web, incluyendo textos, imágenes, gráficos, logotipos, software y código, son propiedad de la clínica o de terceros que han autorizado su uso. Queda prohibida su reproducción total o parcial sin autorización expresa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Responsabilidad</h2>
              <p>
                La información publicada tiene carácter orientativo y educativo, y no sustituye la consulta médica presencial. La clínica no se hace responsable de los daños derivados del uso incorrecto de la información, ni de errores en los contenidos o interrupciones en el funcionamiento de la web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Enlaces externos</h2>
              <p>
                La web puede incluir enlaces a sitios web de terceros. La clínica no se responsabiliza de los contenidos de dichos sitios externos ni de sus políticas de privacidad.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
