import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}

export default App;
