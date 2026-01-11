import Footer from "./Footer";

function MainContent({ children, titulo }) {

    return (
        <main
            id="main-content"
            role="main"
            tabIndex="-1"
            className="main_content">
            <section aria-labelledby="main-section-title"
                className="w-full max-w-7xl mx-auto text-center px-4">

                {titulo && (
                    <h1
                        id="main-section-title"
                        className="main-title"
                    >
                        {titulo}
                    </h1>
                )}
                {children}
            </section>
                <Footer />
        </main>
    )

}

export default MainContent;