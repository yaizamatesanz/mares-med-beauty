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
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Qué son las cookies</h2>
              <p>
                Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario al acceder a la web y permiten mejorar la navegación, recordar preferencias y optimizar los servicios ofrecidos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Tipos de cookies utilizadas</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies técnicas:</strong> necesarias para el correcto funcionamiento de la web</li>
                <li><strong>Cookies de análisis:</strong> permiten medir y analizar el uso del sitio web</li>
                <li><strong>Cookies de personalización:</strong> recuerdan preferencias del usuario</li>
                <li><strong>Cookies publicitarias:</strong> gestionan espacios publicitarios y solo se utilizan si el usuario ha dado su consentimiento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Consentimiento y gestión</h2>
              <p>
                Las cookies no esenciales solo se activarán si el usuario acepta explícitamente mediante el banner o sistema de configuración de cookies.
              </p>
              <p>
                El usuario puede modificar su consentimiento o eliminar las cookies desde la configuración de su navegador en cualquier momento.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
