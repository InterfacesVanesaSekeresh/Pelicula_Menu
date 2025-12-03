# Actor/Performer Card Component (`List`)

Este componente de React, denominado `List` en el código, está diseñado para mostrar la información esencial de un actor o intérprete, incluyendo su foto, nombre, una indicación de si está destacado y una breve biografía.

## Características Principales

* **Diseño de Tarjeta:** Presenta la información en un formato de tarjeta (`<article>`) limpio y organizado.
* **Accesibilidad (A11y):** Implementa varias prácticas de accesibilidad:
    * Permite la **navegación con teclado** (`tabIndex="0"`).
    * Proporciona una **etiqueta Aria completa** para lectores de pantalla.
* **Resaltado:** Destaca visualmente a los intérpretes en películas importantes (usando el prop `esNota10`).
* **Carga Optimizada:** Utiliza `loading="lazy"` en la imagen para mejorar el rendimiento inicial de la página.
* **Estilización con Tailwind CSS:** Utiliza clases de Tailwind para el diseño y la responsividad.

## Props

| Propiedad | Tipo | Requerido | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- | :--- |
| `foto` | `string` | Sí | URL de la foto del intérprete. | `"https://example.com/photo.jpg"` |
| `nombre` | `string` | Sí | Nombre completo del intérprete. | `"John Doe"` |
| `esNota10` | `boolean` | No | Indica si el intérprete está en una película destacada. Esto aplica un estilo diferente (ej. texto rojo) y añade una nota accesible. | `true` |
| `children` | `React.ReactNode` | No | Contenido de la biografía o descripción del intérprete. | `"Award-winning actor..."` |

## Uso

```jsx
import List from './List'; // Asumiendo que el archivo se llama List.jsx o similar

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Ejemplo de actor destacado */}
      <List 
        foto="[https://via.placeholder.com/300/f00/fff](https://via.placeholder.com/300/f00/fff)" 
        nombre="Jane Smith" 
        esNota10={true}
      >
        Actriz reconocida por su trabajo en el género de ciencia ficción y su compromiso con causas medioambientales.
      </List>

      {/* Ejemplo de actor estándar */}
      <List 
        foto="[https://via.placeholder.com/300/00f/fff](https://via.placeholder.com/300/00f/fff)" 
        nombre="Michael Clark" 
        esNota10={false}
      >
        Joven talento con una prometedora carrera en teatro y cine independiente.
      </List>
    </div>
  );
}