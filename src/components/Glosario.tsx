// src/components/Glosario.tsx
import React from "react";

interface GlosarioProps {
  titulo?: string
  items: { termino: string; definicion: string }[]
  notaFinal?: string
}

const Glosario: React.FC<GlosarioProps> = ({ titulo = "📌 Glosario ciudadano", items, notaFinal }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 my-6">
      <h3 className="font-semibold text-gray-800 mb-3">{titulo}</h3>
      {items.map((item, index) => (
        <p key={index} className="mb-2">
          <b>{item.termino}:</b> {item.definicion}
        </p>
      ))}
      {notaFinal && <p className="mt-2 text-sm text-gray-700">{notaFinal}</p>}
    </div>
  )
}

export default Glosario
