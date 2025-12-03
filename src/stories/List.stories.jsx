import List from "../components/List";
import "../assets/styles/index.css"

export default {
    title: 'Tarjeta Intérprete',
    component: List, 
    //tags: ['autodocs'],
    argTypes: {
        foto: {
            control: 'text',
            description: 'URL de la foto del performer.',
            defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg/330px-Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg',
        },
        nombre: {
            control: 'text',
            description: 'Nombre completo del performer.',
        },
        esNota10: {
            control: 'boolean',
            description: 'Indica si el performer está destacado, lo que cambia el estilo.',
        },
        children: {
            control: 'text',
            description: 'Biografía o descripción del performer.',
        },
    },
    parameters: {
        // Centra la tarjeta para una mejor visualización en Storybook
        layout: 'centered',
    }
};

// --- Historias ---

export const Estandar = {
    args: {
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg/330px-Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg',
        nombre: 'Leonardo Sbaraglia',
        esNota10: false,
        children: 'Leonardo Sbaraglia es un actor argentino que protagoniza Concursante como Martín Circo Martín.',
    },
};

export const Destacado = {
    args: {
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg',
        nombre: 'Tom Hanks',
        esNota10: true,
        children: '"Tom Hanks es un actor estadounidense ganador del Óscar por interpretar a Forrest Gump.."',
    },
};