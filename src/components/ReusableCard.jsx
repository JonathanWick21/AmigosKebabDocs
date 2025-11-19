function ReusableCard(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        <article
            tabIndex="1"
            className="article-card, focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg bw-white shadow-sm hover:shadow-lg transition-shadow duration-200"
            aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
        >
            <figure className="w-full aspect-square rounded-t-lg bg-gray-100 overflow-hidden">
                <img src={foto} alt={`Foto de ${nombre}`}
                loading="lazy" className="w-full h-full object-cover" />
                <figcaption className="sr-only">{props.nombre}</figcaption>
            </figure>

            <header>
                <h2 className={"text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${esNota10 ? 'text-red-600' : 'text-gray-800'}"}>
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete destacado</em>}
                </h2>
            </header>

        </article>
    )
}
export default ReusableCard;