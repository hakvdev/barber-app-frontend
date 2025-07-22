import { Navigate } from "react-router-dom"
import { useUserStore} from "../../store/userStore"

export default function RequireAuth({children} : {children: React.ReactNode}) {
    const {isAuthenticated} = useUserStore()

    return isAuthenticated ? <>{children}</> : <Navigate to="/" />
}