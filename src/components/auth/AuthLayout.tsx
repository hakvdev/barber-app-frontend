import logo from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-blue-400 min-h-screen flex flex-col justify-center items-center gap-10">
      <img src={logo} alt="Logo" className="h-[100px]" />
      <Outlet />
    </div>
  );
}
