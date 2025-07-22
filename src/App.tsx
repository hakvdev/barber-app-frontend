import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/*" element={<PublicRoutes />} />
      {/*Rutas privadas */}
      <Route path="/dashboard/*" element={<PrivateRoutes />} />
    </Routes>
  );
}

export default App;
