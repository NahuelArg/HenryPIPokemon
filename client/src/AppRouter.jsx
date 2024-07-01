import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { HomePage, PokemonPage } from "./Pages";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Form } from "./components/Form/Form";
export default function AppRouter() {
  const location = useLocation();
  
  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
