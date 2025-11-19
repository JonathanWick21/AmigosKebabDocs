import MainContent from "../components/MainContent.jsx";
import ReusableCard from "../components/ReusableCard.jsx";
import interpretersData from "../data/peliculas.js";

function Interpreters() {
    return(
        <>
        <MainContent titulo="Página de Intérpretes">
            <p>Intérpretes</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {interpretersData.map( pelicula => 
                    pelicula.actores.map( (interprete, index) =>
                        <ReusableCard
                            key={index}
                            nombre={interprete.nombre}
                            foto={interprete.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {interprete.biografia}
                        </ReusableCard>
                    ))
                }
            </div>

        </MainContent>
        </>
    )
}
export default Interpreters;