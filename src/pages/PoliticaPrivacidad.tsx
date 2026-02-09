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
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Responsable del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nombre:</strong> Clínica Marès</li>
                <li><strong>NIF/CIF:</strong> 78512273W</li>
                <li><strong>Dirección:</strong> Calle Perdomo número 8 local 9, CP 35002, Las Palmas de Gran Canaria</li>
                <li><strong>Correo de contacto:</strong> doctorabueno@clinicamares.com</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Finalidades del tratamiento de datos</h2>
              <p>Recabamos datos personales para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar citas, consultas y servicios médicos o estéticos</li>
                <li>Atender solicitudes de información o contacto</li>
                <li>Gestionar historiales clínicos internos, en caso de prestación de servicios sanitarios</li>
                <li>Enviar comunicaciones informativas o promociones si el usuario ha dado su consentimiento explícito</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Tipos de datos tratados</h2>
              <p>Se podrán tratar los siguientes datos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos de identificación personal (nombre, apellidos, DNI/NIE, fecha de nacimiento)</li>
                <li>Datos de contacto (correo electrónico, teléfono, dirección)</li>
                <li>Información de salud relevante para la prestación de servicios</li>
                <li>Datos económicos en caso de contratación de tratamientos o servicios</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Base legal</h2>
              <p>El tratamiento se basa en:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>El consentimiento explícito del paciente, especialmente en relación con los datos de salud</li>
                <li>La ejecución de un contrato o la prestación de servicios sanitarios</li>
                <li>El cumplimiento de obligaciones legales aplicables al centro sanitario</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Conservación de datos</h2>
              <p>
                Los datos se conservarán mientras exista relación asistencial o durante los plazos legales establecidos. Posteriormente, se eliminarán de forma segura o se mantendrán bloqueados cuando sea necesario para el cumplimiento de obligaciones legales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Destinatarios</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los datos no se cederán a terceros salvo obligación legal</li>
                <li>Podrán tener acceso a los datos proveedores que prestan servicios a la clínica (software de gestión clínica, plataformas de cita online o servicios de correo electrónico), actuando como encargados de tratamiento bajo contratos que garantizan la confidencialidad y seguridad de la información</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Derechos del usuario</h2>
              <p>
                Los usuarios pueden ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando una solicitud junto con copia de documento identificativo a: <a href="mailto:contacto@clinicamares.com" className="text-primary hover:underline">contacto@clinicamares.com</a>
              </p>
              <p>
                Asimismo, tienen derecho a presentar una reclamación ante la Agencia Española de Protección de Datos si consideran que el tratamiento de sus datos no se ajusta a la normativa vigente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Medidas de seguridad</h2>
              <p>
                Se aplican medidas técnicas y organizativas apropiadas para proteger los datos personales, especialmente los relativos a la salud, contra accesos no autorizados, pérdida, alteración o divulgación indebida.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Uso de imágenes y testimonios</h2>
              <p>
                Todas las imágenes de pacientes y testimonios publicados se realizan únicamente con el consentimiento explícito y por escrito de los interesados.
              </p>
              <p>
                Se respeta la privacidad, confidencialidad e integridad del paciente. Las imágenes tienen fines informativos y promocionales y no garantizan resultados concretos. Los testimonios reflejan experiencias individuales y no constituyen una garantía de resultados clínicos.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
