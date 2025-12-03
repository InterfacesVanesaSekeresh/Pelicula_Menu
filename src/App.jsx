/**
 * Main application component.
 * Renders the Header and Router components to provide navigation and layout.
 *
 * @component
 * @returns {JSX.Element} The rendered application.
 */
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
export default App;
