import { Route, Routes } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home";
import AuthLayout from "../components/auth/AuthLayout";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<h1 className="font-bold text-xl text-white">404 Not Found</h1>}/>
      </Route>
    </Routes>
  );
}
