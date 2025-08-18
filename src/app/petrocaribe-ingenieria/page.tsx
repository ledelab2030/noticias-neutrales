// app/petrocaribe-ingenieria/page.tsx
export default function PetrocaribeIngenieriaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Petrocaribe Ingeniería Ltda.</h1>

      {/* Intro */}
      <section className="mb-6 rounded-2xl border border-gray-200/70 bg-white shadow-sm">
        <div className="space-y-4 p-6">
          <p>
            <strong>Petrocaribe Ingeniería Ltda.</strong>, filial de <strong>LedeLab Group OÜ</strong> y parte del Grupo Protemad, fue fundada en 1996 en Barranquilla. Está especializada en el diseño, elaboración y comercialización de aditivos químicos para la industria petrolera. Sus soluciones abarcan fluidos de control de pozos, estimulación, inyección de agua y recobro mejorado (EOR). La compañía cuenta con un sistema de gestión de calidad certificado ISO 9001 por Bureau Veritas.
          </p>
        </div>
      </section>

      {/* Portafolio */}
      <h2 className="text-2xl font-semibold mb-4">Portafolio de productos</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Línea PET® con surfactantes no iónicos para reacondicionamiento de pozos (PET®-5, PET®-6, PET®-40, PET®-41).</li>
        <li>Tensoactivos biodegradables para recobro mejorado (PET®-524EOR, PET®-525EOR).</li>
        <li>Intensificadores de disolventes para remover depósitos orgánicos (PET®-550, PET®-580).</li>
        <li>Bactericidas de amplio espectro para inyección de agua (GEMACID, PET®-690, PET®-691, PET®-692).</li>
        <li>Secuestrante de hierro para estimulaciones ácidas (PET®-415).</li>
        <li>Modificador de perfiles de inyección de larga duración (PET®-4000).</li>
      </ul>

      {/* I+D */}
      <h2 className="text-2xl font-semibold mb-4">Investigación e innovación</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Desarrollo de surfactantes biodegradables PET®-524 y PET®-525, estables en aguas duras.</li>
        <li>GEMACID®, bactericida y esporicida con acción inhibidora de corrosión.</li>
        <li>Laboratorio propio para formulación y adaptación de productos a necesidades específicas.</li>
      </ul>

      {/* Clientes */}
      <h2 className="text-2xl font-semibold mb-4">Clientes clave</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Ecopetrol</li>
        <li>Halliburton</li>
        <li>Baker Hughes</li>
        <li>Schlumberger</li>
        <li>Weatherford</li>
      </ul>

      {/* Contacto general */}
      <h2 className="text-2xl font-semibold mb-4">Contacto para Requerimientos</h2>
      <section className="rounded-2xl border border-gray-200/70 bg-white shadow-sm">
        <div className="p-6 space-y-2">
          <p><strong>Nombre:</strong> Leonardo De la Hoz Borrego</p>
          <p><strong>Teléfono:</strong> +57 305 4045990</p>
          <p><strong>Correo:</strong> leonardo@ledelab.group</p>
        </div>
      </section>

    </main>
  )
}
