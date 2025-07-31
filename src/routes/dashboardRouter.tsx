import BarberDashboard from "../pages/BarberDashboard";
import ClientDashboard from "../pages/ClientDashboard";
import { useUserStore } from "../store/userStore";


export default function DashboardRouter() {
    const {user} = useUserStore()

    if(user?.role === "CLIENT") {
        return <ClientDashboard />
    }

    if(user?.role === "BARBER") {
        return <BarberDashboard />
    }
}