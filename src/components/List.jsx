
/**
 * List component that displays an actor/performer card with photo, name, and biography.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {string} props.foto - URL of the performer's photo
 * @param {string} props.nombre - Name of the performer
 * @param {boolean} props.esNota10 - Flag indicating if the performer is in a featured/highlighted movie
 * @param {React.ReactNode} props.children - Biography or description text of the performer
 * 
 * @returns {React.ReactElement} An article element displaying performer information with accessibility features
 * 
 * @example
 * <List 
 *   foto="https://example.com/photo.jpg" 
 *   nombre="John Doe" 
 *   esNota10={true}
 * >
 *   Award-winning actor known for dramatic roles.
 * </List>
 */
function List(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        
        <article
            tabIndex="0" // Permite navegar con Tab
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
        >
            {/* Imagen del intérprete con figcaption oculto para lectores de pantalla */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    {/* Nombre del intérprete */}
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete en película destacada</em>}
                </h2>
            </header>
            {/* Biografía o descripción */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>

    );
}

export default List;


