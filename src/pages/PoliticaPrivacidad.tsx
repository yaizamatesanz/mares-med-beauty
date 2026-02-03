import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16">
        <div className="w-[95%] max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Política de <span className="text-primary font-medium">Privacidad</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground/70">
              Última actualización: Febrero 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Responsable del tratamiento</h2>
              <p>
                En cumplimiento del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que los datos personales que nos facilite serán tratados por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Responsable:</strong> [NOMBRE COMPLETO DE LA SOCIEDAD O "Daniela Bueno Ventura"]</li>
                <li><strong>CIF/NIF:</strong> [CIF DE LA SOCIEDAD o DNI DE DANIELA]</li>
                <li><strong>Domicilio:</strong> Calle Perdomo nº8 Local 9, 35002 Las Palmas de Gran Canaria</li>
                <li><strong>Email:</strong> [EMAIL OFICIAL PARA PROTECCIÓN DE DATOS]</li>
                <li><strong>Teléfono:</strong> 928 471 488</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Finalidad del tratamiento</h2>
              <p>
                Sus datos personales serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar las solicitudes de cita y consultas realizadas a través del formulario de contacto.</li>
                <li>Prestar los servicios médico-estéticos contratados.</li>
                <li>Mantener la relación comercial y asistencial con nuestros pacientes.</li>
                <li>Enviar comunicaciones comerciales sobre nuestros servicios, siempre que haya dado su consentimiento expreso.</li>
                <li>Cumplir con las obligaciones legales aplicables.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Base legal del tratamiento</h2>
              <p>
                La base legal para el tratamiento de sus datos es:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ejecución de un contrato:</strong> Para la prestación de los servicios médico-estéticos solicitados.</li>
                <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales.</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> Para la conservación de historiales clínicos según la normativa sanitaria.</li>
                <li><strong>Interés legítimo:</strong> Para la gestión administrativa y contable de la actividad.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Categorías de datos tratados</h2>
              <p>
                Las categorías de datos que tratamos incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos identificativos: nombre, apellidos, DNI/NIE, dirección, teléfono, email.</li>
                <li>Datos de salud: historial médico-estético, tratamientos realizados, fotografías clínicas.</li>
                <li>Datos económicos: datos de facturación y pago.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Destinatarios de los datos</h2>
              <p>
                Sus datos personales no serán cedidos a terceros, salvo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obligación legal (Administración Tributaria, Juzgados y Tribunales, etc.).</li>
                <li>Encargados de tratamiento que presten servicios necesarios para nuestra actividad (hosting, gestión contable, etc.), con los que se han firmado los correspondientes contratos de encargo de tratamiento.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Conservación de los datos</h2>
              <p>
                Los datos personales serán conservados durante:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Datos de pacientes:</strong> El tiempo legalmente establecido para la conservación de historiales clínicos (mínimo 5 años desde el alta del último proceso asistencial, según la Ley 41/2002).</li>
                <li><strong>Datos de contacto:</strong> Mientras exista interés mutuo en mantener la relación comercial.</li>
                <li><strong>Datos de facturación:</strong> 6 años conforme a la normativa mercantil y fiscal.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Derechos del interesado</h2>
              <p>
                Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando una solicitud a [EMAIL OFICIAL] o por correo postal a nuestra dirección, adjuntando copia de su DNI.
              </p>
              <p>
                Asimismo, tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retirar el consentimiento otorgado en cualquier momento.</li>
                <li>Presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que sus derechos no han sido atendidos correctamente.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Medidas de seguridad</h2>
              <p>
                [NOMBRE DEL TITULAR] ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Modificaciones de la política de privacidad</h2>
              <p>
                [NOMBRE DEL TITULAR] se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactar con nosotros a través de:
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

export default PoliticaPrivacidad;
