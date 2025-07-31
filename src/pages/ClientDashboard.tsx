
import BarberCard from "../components/barber/BarberCard";
import Logo from "../components/Logo";
import UserCard from "../components/UserCard";
import { useUserStore } from "../store/userStore";

export default function ClientDashboard() {
  const barberSimulated = [
  {
    barberName: "Pablo Fernández",
    servicios: ["Corte de pelo", "Barba", "Cejas"],
    precio: 3000,
  },
  {
    barberName: "Pedro Hernández",
    servicios: ["Corte de pelo", "Barba", "Cejas"],
    precio: 3000,
  },
  {
    barberName: "Mariano Urrutia",
    servicios: ["Corte de pelo", "Barba", "Cejas"],
    precio: 3000,
  },
  {
    barberName: "Joaquín Soto",
    servicios: ["Corte de pelo", "Perfilado de barba"],
    precio: 3500,
  },
  {
    barberName: "Carlos Medina",
    servicios: ["Corte de pelo", "Coloración", "Barba"],
    precio: 4000,
  },
  {
    barberName: "Matías Rojas",
    servicios: ["Corte clásico", "Cejas", "Diseño de barba"],
    precio: 3200,
  },
  {
    barberName: "Álvaro Tapia",
    servicios: ["Corte fade", "Barba", "Mascarilla facial"],
    precio: 3800,
  },
  {
    barberName: "Ignacio López",
    servicios: ["Corte de pelo", "Cejas", "Afeitada tradicional"],
    precio: 3300,
  },
  {
    barberName: "Felipe Vargas",
    servicios: ["Corte de pelo", "Diseño de cejas", "Barba"],
    precio: 3600,
  },
  {
    barberName: "Tomás Ramírez",
    servicios: ["Corte urbano", "Barba", "Cejas", "Peinado"],
    precio: 3900,
  },
];

  const { user, logout } = useUserStore();
  if (!user) {
    return;
  }

  if(user.role === "CLIENT") {
    return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex justify-between p-2">
        <Logo />
        <UserCard user={user} />
      </div>

      <div className="filter-search-container p-4">
        <div className="w-full flex justify-center space-x-6">
          <h1 className="font-bold text-gray-50">Buscador</h1>
          <h2 className="font-bold text-gray-50">Categorías</h2>
        </div>

        <div className="w-full mt-10">
          <div className="flex justify-center">
            <h1 className="font-bold text-yellow-500">Barberos Disponibles</h1>
          </div>
          <div className="grid grid-cols-3 justify-items-center gap-4 mt-10">
            {barberSimulated.map((barber) => (
              <BarberCard key={barber.barberName} barber={barber} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );}

  if(user.role === "BARBER") {
    return (
      <div>
        <h1>Hola, eres un barbero</h1>
        <button onClick={logout} className="bg-red-400 rounded p-2 cursor-pointer">Salir</button>
      </div>
    )
  }
}
