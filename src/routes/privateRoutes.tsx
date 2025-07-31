import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/auth/RequireAuth";
import DashboardRouter from "./dashboardRouter";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <RequireAuth>
            <DashboardRouter />
          </RequireAuth>
        }
       />
    </Routes>
  );
}
