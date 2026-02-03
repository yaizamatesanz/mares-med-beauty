import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16">
        <div className="w-[95%] max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Política de <span className="text-primary font-medium">Cookies</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground/70">
              Última actualización: Febrero 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, smartphone) cuando visita un sitio web. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias (como idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que visite el sitio o navegue de una página a otra.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. ¿Quién utiliza la información de las cookies?</h2>
              <p>
                La información recogida por las cookies es utilizada exclusivamente por Daniela Bueno Ventura, con NIF [DNI DE DANIELA], con domicilio en Calle Perdomo nº8 Local 9, 35002 Las Palmas de Gran Canaria.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Tipos de cookies que utilizamos</h2>
              <p>
                En nuestro sitio web utilizamos los siguientes tipos de cookies:
              </p>
              
              <h3 className="text-lg font-medium text-foreground mt-4">Cookies técnicas (necesarias)</h3>
              <p>
                Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen. Son imprescindibles para el funcionamiento del sitio web.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Control de sesión de usuario</li>
                <li>Recordar preferencias de navegación</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-4">Cookies analíticas</h3>
              <p>
                Son aquellas que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del sitio web. Para ello se analiza su navegación con el fin de mejorar la oferta de productos o servicios.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-4">Cookies de terceros</h3>
              <p>
                Nuestro sitio web puede utilizar servicios de terceros que, por cuenta propia, recopilarán información con fines estadísticos y de uso del sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Servicio de análisis web que permite medir y analizar la navegación en el sitio web. Puede consultar su política de cookies en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Gestión de cookies</h2>
              <p>
                Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su dispositivo. A continuación le ofrecemos enlaces donde encontrará información sobre cómo gestionar las cookies en los principales navegadores:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
              <p>
                Tenga en cuenta que si desactiva las cookies, es posible que no pueda utilizar todas las funcionalidades de nuestro sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Actualización de la política de cookies</h2>
              <p>
                Daniela Bueno Ventura puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Por ello, se aconseja a los usuarios que la visiten periódicamente.
              </p>
              <p>
                Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicará a los usuarios mediante un aviso informativo en el sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con nuestra Política de Cookies, puede contactar con nosotros a través de:
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

export default Cookies;
