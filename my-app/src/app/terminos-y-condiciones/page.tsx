import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { landingNavigation } from "../navigation.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de Tu Partner Contador.",
};

export default function TerminosYCondiciones() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation navigation={landingNavigation} />
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Términos y Condiciones de Uso
        </h1>
        <div className="prose prose-lg text-[#5A5A5A]">
          <p className="mb-4">
            Bienvenido al sitio web de <strong>Tu Partner Contador</strong>. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de Tu Partner Contador con usted en relación con este sitio web.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">1. Información General</h2>
          <p className="mb-4">
            El titular de este sitio web es <strong>Tu Partner Contador</strong>, empresa de servicios de asesoría contable, tributaria y laboral, con domicilio en la Región Metropolitana, Chile.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">2. Uso del Sitio Web</h2>
          <p className="mb-4">
            El contenido de las páginas de este sitio web es para su información y uso general. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros ofrecemos ninguna garantía en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">3. Propiedad Intelectual</h2>
          <p className="mb-4">
            Este sitio web contiene material que es propiedad nuestra o del que tenemos licencia. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. La reproducción está prohibida salvo de conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">4. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            El uso de cualquier información o material en este sitio web es bajo su propio riesgo, por lo cual no seremos responsables. Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">5. Enlaces a Terceros</h2>
          <p className="mb-4">
            De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos el sitio web(s). No tenemos ninguna responsabilidad por el contenido del sitio web vinculado.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">6. Legislación Aplicable y Jurisdicción</h2>
          <p className="mb-4">
            El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes de Chile. Cualquier conflicto será sometido a la jurisdicción de los tribunales ordinarios de justicia de la ciudad de Santiago.
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
