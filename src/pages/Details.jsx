import { useNavigate, useParams} from "react-router-dom";
import products from "../data/dataProducts.js";
import Footer from "../components/Footer.jsx";

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find( product => product.id === parseInt(id));

    if (!product) {
        return <div className="p-10 text-center">Producto no encontrado</div>;
    }
    
    return(
         <>
         
        <main className="container mx-auto p-6">
      <section className="md:flex md:items-start md:gap-8">
        <figure className="md:w-2/5 lg:w-1/3 relative flex-shrink-0">
        {/*Boton para que vuelva a la pagina anterior*/}
          <button
            onClick={() => navigate(-1)}
            aria-label="Volver"
            className="absolute top-2 left-2 z-10 bg-white text-gray-800 px-2 py-1 text-sm rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Volver
          </button>
          <img
            src={product.imagen}
            alt={product.nombre}
            className="w-full h-96 md:h-[36rem] lg:h-[44rem] object-contain rounded-lg shadow-md"
          />
        </figure>

        <div className="mt-4 md:mt-0 md:w-3/5 lg:pl-8">
          <h1 className="text-2xl font-bold">{product.nombre}</h1>
          <h3 className="mt-4 text-lg font-semibold">Descripción</h3>
          <p className="mt-4 text-gray-700">{product.descripcion}</p>
          <h3 className="mt-4 text-lg font-semibold">Precio</h3>
          <p className="mt-4 text-gray-700">{product.precio}</p>

          
        </div>
      </section>
    </main>
    <Footer />
        </>
    )
} export default Details;