import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { landingNavigation } from "../navigation.data";

export default function DefensaDelConsumidor() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation navigation={landingNavigation} />
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Derechos del Consumidor y Garantías
        </h1>
        <div className="prose prose-lg text-[#5A5A5A]">
          <p className="mb-4">
            En <strong>Tu Partner Contable</strong>, respetamos y cumplimos plenamente con la normativa vigente en Chile respecto a los derechos de los consumidores, establecida en la <strong>Ley N° 19.496 sobre Protección de los Derechos de los Consumidores</strong>.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">1. Derecho a Retracto</h2>
          <p className="mb-4">
            De acuerdo con el artículo 3 bis de la Ley 19.496, en los contratos celebrados por medios electrónicos, y en aquellos en que se aceptare una oferta realizada a través de catálogos, avisos o cualquier otra forma de comunicación a distancia, el consumidor podrá poner término unilateralmente al contrato en el plazo de <strong>10 días</strong> contados desde la recepción del producto o desde la contratación del servicio y antes de que éste se preste.
          </p>
          <p className="mb-4">
            Para ejercer este derecho, el usuario deberá enviar una comunicación escrita al correo <strong>andres.cabrera@tupartnercontador.cl</strong> indicando su voluntad de ejercer el derecho a retracto.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">2. Garantía Legal (6x3)</h2>
          <p className="mb-4">
            Si bien nuestros servicios son de naturaleza intangible (asesoría), garantizamos la calidad y profesionalismo en su ejecución. Para productos o servicios que apliquen bajo la normativa de garantía legal:
          </p>
          <p className="mb-4">
            Los consumidores tienen derecho a la garantía legal dentro de los <strong>6 meses</strong> siguientes a la compra o contratación si el servicio presenta deficiencias o no cumple con lo ofrecido. En tal caso, el consumidor tiene derecho a:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li>La reparación gratuita del defecto.</li>
            <li>La reposición o nueva ejecución del servicio.</li>
            <li>La devolución de la cantidad pagada.</li>
          </ul>
          <p className="mb-4">
            Este derecho se ejerce cuando el servicio no cumple con las características técnicas informadas, o si no es apto para el uso al que está destinado.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">3. Medios de Contacto y Reclamos</h2>
          <p className="mb-4">
            Para cualquier consulta, reclamo o solicitud relacionada con sus derechos como consumidor, ponemos a su disposición los siguientes canales de atención:
          </p>
          <ul className="mb-4 list-disc pl-5">
            <li><strong>Correo Electrónico:</strong> andres.cabrera@tupartnercontador.cl</li>
            <li><strong>Teléfono:</strong> +56 9 4681 6949</li>
            <li><strong>Dirección:</strong> Región Metropolitana, Chile.</li>
          </ul>
          <p className="mb-4">
            Nos comprometemos a responder a sus consultas y reclamos en el menor plazo posible, buscando siempre una solución satisfactoria y conforme a la ley.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-[#1A1A1A]">4. SERNAC</h2>
          <p className="mb-4">
            Si considera que sus derechos han sido vulnerados, tiene derecho a acudir al Servicio Nacional del Consumidor (SERNAC) para interponer el reclamo correspondiente. Puede obtener más información en <a href="https://www.sernac.cl" target="_blank" rel="noopener noreferrer" className="text-[#3571DF] hover:underline">www.sernac.cl</a>.
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
