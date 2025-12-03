/**
 * AppRouter - Main routing component for the movie application
 * 
 * @component
 * @returns {JSX.Element} Routes configuration with nested layout structure
 * 
 * @description
 * Configures all application routes including:
 * - Home page at root path "/"
 * - Movies listing at "/peliculas"
 * - Actors listing at "/interpretes"
 * - Admin panel at "/admin"
 * - Movie details at "/detalle/pelicula/:idPeli"
 * - Actor details at "/detalle/pelicula/:idPeli/interprete/:idInterprete"
 * - Redirect from "/inicio" to home
 * - 404 catch-all route for non-existent paths
 * 
 * All routes are nested under the Contenedor layout component
 * 
 * @example
 * // Usage in main App component
 * <AppRouter />
 */
import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";
import Detail from "./Detail";

import Home from "../pages/Home";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
import Admin from "../pages/Admin";

function AppRouter() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detalle/pelicula/:idPeli" element={<Detail es="pelicula" />} />
        <Route path="/detalle/pelicula/:idPeli/interprete/:idInterprete" element={<Detail es="interprete" />} />
      </Route>

      {/* Página 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta no existe.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}
export default AppRouter;