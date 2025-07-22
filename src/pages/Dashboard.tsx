import { useUserStore } from "../store/userStore"


export default function Dashboard() {
    const {user, logout} = useUserStore()
    if(!user) {
        return
    }
    return (
        <div>
            <h1>Bienvenido, {user.name}</h1>
            <p>Role: {user.role}</p>
            <h2>Email: {user.email}</h2>
            <button onClick={logout} type="submit">Cerrar Sesión</button>
        </div>
    )
}