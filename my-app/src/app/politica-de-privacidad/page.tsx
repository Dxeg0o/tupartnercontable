import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { landingNavigation } from "../navigation.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales de Tu Partner Contador.",
};

export default function PoliticaDePrivacidad() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation navigation={landingNavigation} />
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Política de Privacidad
        </h1>
        <div className="prose prose-lg text-[#5A5A5A]">
          <p className="mb-4">
            En <strong>Tu Partner Contador</strong>, valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información, en cumplimiento con la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong> de Chile.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">1. Recopilación de Información</h2>
          <p className="mb-4">
            Podemos recopilar la siguiente información cuando usted utiliza nuestro sitio web, especialmente al completar formularios de contacto:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li>Nombre completo.</li>
            <li>Información de contacto, incluida la dirección de correo electrónico y número de teléfono.</li>
            <li>Otra información relevante para encuestas a clientes y/o ofertas.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">2. Uso de la Información</h2>
          <p className="mb-4">
            Requerimos esta información para entender sus necesidades y brindarle un mejor servicio, y en particular por las siguientes razones:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li>Mantenimiento de registros internos.</li>
            <li>Podemos utilizar la información para mejorar nuestros productos y servicios.</li>
            <li>Podemos enviar correos electrónicos promocionales periódicamente sobre nuevos servicios, ofertas especiales u otra información que pensamos que puede resultar interesante utilizando la dirección de correo electrónico que usted ha proporcionado.</li>
            <li>Para contactarlo con fines de respuesta a sus consultas.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">3. Seguridad</h2>
          <p className="mb-4">
            Estamos comprometidos a asegurar que su información esté segura. Con el fin de prevenir el acceso no autorizado o la divulgación, hemos puesto en marcha procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">4. Derechos ARCO</h2>
          <p className="mb-4">
            De acuerdo con la Ley 19.628, usted tiene derecho a:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que almacenamos sobre usted.</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
            <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios o si decide retirar su consentimiento.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos.</li>
          </ul>
          <p className="mb-4">
            Para ejercer cualquiera de estos derechos, por favor contáctenos a través de nuestro correo electrónico: <strong>andres.cabrera@tupartnercontador.cl</strong>.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">5. Control de su Información Personal</h2>
          <p className="mb-4">
            No venderemos, distribuiremos ni cederemos su información personal a terceros a menos que tengamos su permiso o estemos obligados por ley a hacerlo.
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
