import MainContent from "../components/MainContent";

function HomePage() {
    return (
        <>
            <MainContent titulo="Página de Inicio">
                <p  className="body-text text-(--colorprimary)">
                    Esta es la pagina de inicio de la aplicación de películas navegables.
                </p>
            </MainContent>
        </>
    )
}
export default HomePage;