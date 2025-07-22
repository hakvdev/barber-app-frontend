import logo from "../../assets/logo.svg";
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

export default function AuthLayout() {

  const {isAuthenticated} = useUserStore()

  if(isAuthenticated) {
    return <Navigate to="/dashboard"/>
  }

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col justify-center items-center gap-10">
      <img src={logo} alt="Logo" className="h-[100px]" />
      <Outlet />
    </div>
  );
}
