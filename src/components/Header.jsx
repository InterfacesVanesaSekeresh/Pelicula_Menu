/**
 * Header component that renders the main page header.
 * 
 * Displays a header with the site title "Películas" and a navigation component.
 * The header is styled with a white background, shadow effect, and responsive padding.
 * 
 * @component
 * @returns {JSX.Element} A header element containing the site title and navigation menu
 * 
 * @example
 * return (
 *   <Header />
 * )
 */
import Nav from "./Nav";

function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
