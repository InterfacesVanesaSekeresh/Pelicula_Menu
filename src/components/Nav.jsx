import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation component that renders a responsive navigation menu.
 * 
 * Features a hamburger menu button for mobile devices that toggles visibility,
 * and a full navigation bar for desktop screens. Includes accessibility attributes
 * for screen readers and semantic navigation links.
 * 
 * The menu contains links to:
 * - Inicio (Home)
 * - Películas (Movies)
 * - Intérpretes (Actors)
 * - Admin
 * 
 * @component
 * @returns {JSX.Element} A responsive navigation component with a hamburger menu button
 * and navigation links with smooth transitions between mobile and desktop views.
 * 
 * @example
 * return (
 *   <Nav />
 * )
 */
function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa accesible */}
      <button
        className="md:hidden border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="menu-principal"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* NAV */}
      <nav
        id="menu-principal"
        className={`
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
          md:max-h-none md:opacity-100 
          overflow-hidden transition-all duration-300 ease-in-out
          md:flex md:gap-6 text-lg 
          absolute md:static left-0 right-0 top-16 md:top-auto 
          bg-white shadow md:shadow-none 
          p-6 md:p-0
        `}
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/peliculas"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Películas
        </NavLink>

        <NavLink
          to="/interpretes"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Intérpretes
        </NavLink>

        <NavLink
          to="/admin"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block"
              : "hover:underline block"
          }
        >
          Admin
        </NavLink>
      </nav>
    </>
  );
}
export default Nav;