import { Outlet, Link, NavLink } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from "react";


function AdminNavigationBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <nav>
            <Header>
                <nav className="navigation-bar flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/src/assets/images/logo.png"
                                alt="Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <h1 className="nav-title">
                                Amigos Kebab
                            </h1>
                        </Link>


                    <button className="md:hidden"
                     onClick={() => setOpen(!open)}>
                    ☰
                    </button>
                    <div className={`flex flex-col md:flex md:flex-row gap-4 ${open ? "block" : "hidden"} md:flex`}>
                        <NavLink to="/" className="nav-link"  onClick={() => setOpen(false)} aria-label="Inicio">Inicio</NavLink>
                        <NavLink to="/productos" className="nav-link" onClick={() => setOpen(false)} aria-label="Catalogo">Catálogo</NavLink>
                        <NavLink to="/admin" className="nav-link" onClick={() => setOpen(false)} aria-label="Panel de administración">Admin</NavLink>

                    </div>
                </nav>
            </Header>
            <Outlet />
        </nav>
        </>
    );
}

export default AdminNavigationBar;
