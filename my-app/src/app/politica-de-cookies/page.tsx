import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { landingNavigation } from "../navigation.data";

export default function PoliticaDeCookies() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation navigation={landingNavigation} />
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Política de Cookies
        </h1>
        <div className="prose prose-lg text-[#5A5A5A]">
          <p className="mb-4">
            Esta política explica qué son las cookies y cómo las utilizamos en el sitio web de <strong>Tu Partner Contador</strong>. Usted debe leer esta política para entender qué tipo de cookies utilizamos, la información que recopilamos mediante las cookies y cómo se utiliza esa información.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">1. ¿Qué son las Cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita sitios web. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">2. ¿Cómo utilizamos las Cookies?</h2>
          <p className="mb-4">
            Utilizamos cookies para:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li>Entender y guardar sus preferencias para futuras visitas.</li>
            <li>Recopilar datos agregados sobre el tráfico del sitio y las interacciones del sitio para ofrecer mejores experiencias y herramientas en el futuro.</li>
            <li>Mejorar la velocidad y seguridad del sitio.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">3. Tipos de Cookies que utilizamos</h2>
          <p className="mb-4">
            <strong>Cookies Esenciales:</strong> Son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente están configuradas para responder a acciones hechas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o llenar formularios.
          </p>
          <p className="mb-4">
            <strong>Cookies de Rendimiento y Análisis:</strong> Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los visitantes se mueven por el sitio.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">4. Gestión de Cookies</h2>
          <p className="mb-4">
            Puede elegir que su ordenador le avise cada vez que se envíe una cookie, o puede elegir desactivar todas las cookies. Esto se hace a través de la configuración de su navegador (como Google Chrome, Safari, Firefox o Edge). Cada navegador es un poco diferente, así que mire el menú de Ayuda de su navegador para aprender la manera correcta de modificar sus cookies.
          </p>
          <p className="mb-4">
            Si desactiva las cookies, algunas características que hacen que su experiencia en el sitio sea más eficiente pueden no funcionar correctamente.
          </p>

          <p className="mt-8 text-sm italic">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
