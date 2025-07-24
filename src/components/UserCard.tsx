import { useUserStore } from "../store/userStore"


interface IUser {
    name: string, 
    email: string, 
    role: string
}


type UserProps = {
    user: IUser
}


export default function UserCard ({user} :  UserProps) {
    const {logout} = useUserStore()

  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg p-6 w-[300px] h-[130px] border-4 border-gray-300 flex items-center justify-between">
      {/* Información del usuario - lado izquierdo */}
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
          <h1 className="text-sm font-semibold text-gray-50 truncate">{user.name}</h1>
        </div>
        <p className="text-xs text-gray-50 truncate mb-1">{user.email}</p>
        <span className="px-2 py-0.5 border border-green-500 text-gray-50 rounded-full text-xs font-medium">
          Rol: {user.role.toLowerCase()}
        </span>
      </div>

      {/* Botones - lado derecho */}
      <div className="flex flex-col space-y-2 ml-4">
        <button
          onClick={() => {}}
          className="px-3 py-1 border cursor-pointer border-orange-700 hover:bg-orange-700 text-white text-xs font-medium rounded-md transition-colors duration-200"
        >
          Editar
        </button>
        <button
          onClick={() => {}}
          className="px-3 py-1 border cursor-pointer border-blue-600 hover:bg-blue-600 text-white text-xs font-medium rounded-md transition-colors duration-200"
        >
          Ver mis citas
        </button>
        <button
          onClick={logout}
          className="px-3 py-1 border cursor-pointer border-red-800 hover:bg-red-800 text-gray-50 text-xs font-medium rounded-md transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  )
}