import { Routes, Route, Navigate } from "react-router-dom";
import { ContactoPage, EstudiosPage, ExperienciaPage, InicioPage, PerfilPage, PortafolioPage, Error404 } from "../landing/pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to ="inicio"/>} />
        <Route path="/*" element={<Navigate to ="inicio"/>} />

        <Route path="error" element={<Error404 />} />
        <Route path="inicio" element={<InicioPage />} />
        <Route path="perfil" element={<PerfilPage />} />
        <Route path="estudios" element={<EstudiosPage />} />
        <Route path="experiencia" element={<ExperienciaPage />} />
        <Route path="portafolio" element={<PortafolioPage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Routes>
    </>
  );
};
