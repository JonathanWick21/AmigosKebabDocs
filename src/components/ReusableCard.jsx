/**
 * Componente de tarjeta reutilizable para mostrar productos del catálogo.
 * * @param {Object} props - Propiedades del componente.
 * @param {string} props.foto - URL de la imagen del producto (Accesibilidad: se usa en alt).
 * @param {string} props.nombre - Título del producto.
 * @param {number} props.precio - Precio del producto en euros.
 * @param {React.ReactNode} props.children - Descripción corta del producto.
 * @returns {JSX.Element} Una tarjeta con semántica de artículo y soporte para teclado.
 */
function ReusableCard(props) {
    const { foto, nombre, precio, children } = props;
    return (
        <article
            tabIndex="0"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 overflow-hidden"
            aria-label={`Información sobre ${nombre}`}
        >
            <figure className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <figcaption className="sr-only">{nombre}</figcaption>
            </figure>


            <div className="p-4 flex flex-col gap-2 items-center text-center">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    {nombre}
                </h2>


                <p className="text-base md:text-lg font-bold text-primary">{precio}€</p>


                {children && (
                    <p className="text-sm text-gray-600 line-clamp-2">{children}</p>
                )}
            </div>
        </article>
    )
}
export default ReusableCard;