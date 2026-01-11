import { Link } from "react-router-dom"
import MainContent from "../components/MainContent.jsx"
import ReusableCard from "../components/ReusableCard.jsx"
import products from "../data/dataProducts.js"
import SearchBar from "../components/SearchBar.jsx"
import { useState } from "react"
import { useMemo } from "react"



function ProductsCatalogue() {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return products;

        const lowercaseSearchTerm = searchTerm.toLowerCase();

        return products.filter((product) =>
            product.nombre.toLowerCase().includes(lowercaseSearchTerm)
        );
    }, [searchTerm]);

    return (
        <MainContent titulo="Nuestra carta">

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar productos..."
            />

            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6">Productos</p>


            {filteredProducts.length === 0 ? (
                    <div className="text-center py-10">
                    <p className="text-gray-500 text-xl">
                        No se encontraron productos que coincidan con "{searchTerm}"
                    </p>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {filteredProducts.map((product) => (
                    <Link
                        to={`/details/${product.id}`}
                        key={product.id}
                        aria-label={`Ver detalles de ${product.nombre}`}
                        className="block"
                    >
                        <ReusableCard
                            nombre={product.nombre}
                            foto={product.imagen}
                            precio={product.precio}
                        >
                            {product.descripcion}
                        </ReusableCard>
                    </Link>
                ))}
            </div>
            )}

            
        </MainContent>
    )
}
export default ProductsCatalogue