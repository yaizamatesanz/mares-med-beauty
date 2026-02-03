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
            <p className="text-sm text-muted-foreground/70">
              Última actualización: Febrero 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Identificación del titular</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> Daniela Bueno Ventura</li>
                <li><strong>NIF:</strong> [DNI DE DANIELA]</li>
                <li><strong>Domicilio:</strong> Calle Perdomo nº8 Local 9, 35002 Las Palmas de Gran Canaria</li>
                <li><strong>Teléfono:</strong> 928 471 488</li>
                <li><strong>Email:</strong> [EMAIL OFICIAL]</li>
                <li><strong>Nº colegiado SEME:</strong> 2898</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Objeto y ámbito de aplicación</h2>
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web clinicamares.com (en adelante, el "Sitio Web"), propiedad de Daniela Bueno Ventura. El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Condiciones de uso</h2>
              <p>
                El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal, y las buenas costumbres. A tal efecto, el usuario se abstendrá de utilizar el Sitio Web con fines ilícitos, lesivos de derechos de terceros, o que de cualquier forma puedan dañar, inutilizar o deteriorar el Sitio Web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Daniela Bueno Ventura o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.
              </p>
              <p>
                Las marcas, nombres comerciales o signos distintivos son titularidad de Daniela Bueno Ventura o terceros, sin que pueda entenderse que el acceso al Sitio Web atribuya ningún derecho sobre los mismos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Exclusión de responsabilidad</h2>
              <p>
                Daniela Bueno Ventura no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del Sitio Web o de sus servicios y contenidos.</li>
                <li>La existencia de virus, programas maliciosos o lesivos en los contenidos.</li>
                <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal.</li>
                <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el Sitio Web.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Enlaces externos</h2>
              <p>
                El Sitio Web puede contener enlaces a sitios web de terceros. Daniela Bueno Ventura no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que se ofrecen exclusivamente con carácter informativo y que en ningún caso implican relación alguna entre Daniela Bueno Ventura y las personas o entidades titulares de tales contenidos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Modificaciones</h2>
              <p>
                Daniela Bueno Ventura se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se prestan a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Legislación aplicable y jurisdicción</h2>
              <p>
                La relación entre Daniela Bueno Ventura y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales de Las Palmas de Gran Canaria, salvo que la ley disponga otra cosa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> [EMAIL OFICIAL]</li>
                <li><strong>Teléfono:</strong> 928 471 488</li>
                <li><strong>Dirección:</strong> Calle Perdomo nº8 Local 9, 35002 Las Palmas de Gran Canaria</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
