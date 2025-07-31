"use client"

interface IBarber {
  barberName: string
  servicios: string[]
  precio: number
}

type BarberProps = {
  barber: IBarber
}

export default function BarberCard({ barber }: BarberProps) {

  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg p-4 w-full max-w-[350px] min-h-[120px] border border-orange-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Información del barbero */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-300 rounded-full flex-shrink-0"></div>
          <h1 className="text-sm font-semibold text-yellow-400 truncate">{barber.barberName}</h1>
        </div>

        {/* Servicios - responsive */}
        <div className="flex flex-wrap gap-2">
          {barber.servicios.map((servicio, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-white rounded-full text-xs font-medium whitespace-nowrap border border-yellow-300"
            >
              {servicio}
            </span>
          ))}
        </div>

        <span className="inline-block px-2 py-0.5 bg-green-800 text-white rounded-full text-xs">
          ${barber.precio}
        </span>
      </div>

      {/* Botones - responsive */}
      <div className="flex sm:flex-col flex-row gap-2 sm:ml-4 ml-0">
        <button
          onClick={() => {}}
          className="flex-1 sm:flex-none px-3 py-1  border border-orange-700 hover:bg-orange-700 cursor-pointer text-white text-xs font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
        >
          Ver perfil
        </button>
        <button
          onClick={() => {}}
          className="flex-1 sm:flex-none px-3 py-1 border border-green-800 text-white hover:bg-green-800 cursor-pointer text-xs font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
        >
          Reservar
        </button>
      </div>
    </div>
  )
}
