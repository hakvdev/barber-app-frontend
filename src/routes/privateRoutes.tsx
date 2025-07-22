import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/auth/RequireAuth";
import Dashboard from "../pages/Dashboard";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
       />
    </Routes>
  );
}
