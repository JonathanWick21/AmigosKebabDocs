/**
 * Componente de página de administración para la gestión de pedidos.
 * Implementa un formulario controlado con validaciones de campos obligatorios.
 * * @returns {JSX.Element} Página con formulario de pedido validado y accesible.
 */

import { useState } from "react";
import MainContent from "../components/MainContent";
import dataProducts from "../data/dataProducts";

function AdminPage() {

    const [formData, setForm] = useState({
        producto: "", carnes: "", cantidad: ""
    })

    const [ errors, setErrors ]  = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const tempErrors = {}

        if(!formData.producto)
            tempErrors.producto = "Debes seleccionar un producto"
        
        if(!formData.carnes)
            tempErrors.carnes = "Debes seleccionar una carne"

        if(formData.cantidad < 1)
            tempErrors.cantidad = "Debes elegir al menos un producto"

        setErrors(tempErrors)

        if(Object.keys(tempErrors).length === 0) {
            console.log("Pedido realizado con exito", formData)
        }
    }


    return (
        <MainContent titulo="Página de Administración">
            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <h2 className="admin-form-title">Pedir Productos</h2>
                    <div className="admin-form-group">
                        <label htmlFor="producto" className="admin-label">
                            Producto:
                        </label>
                        <select id="producto" name="producto" onChange={handleChange} value={formData.producto} className="admin-select">
                            <option value="" disabled>Selecciona un producto</option>
                            {dataProducts.map((product) => (
                                <option key={product.nombre} value={product.nombre}>{product.nombre}</option>
                            ))}
                        </select>
                        {errors.producto && <p className="admin-error">{errors.producto}</p>}
                    </div>

                    <div className="admin-form-group">
                        <label className="admin-label">Tipo de Carne:</label>
                        <div className="admin-radio-group">
                            <label className="admin-radio-label">
                                <input
                                    type="radio"
                                    id="ternera"
                                    name="carnes"
                                    value="ternera"
                                    onChange={handleChange}
                                    className="admin-radio-input" />
                                Ternera
                            </label>
                            <label className="admin-radio-label">
                                <input
                                    type="radio"
                                    id="pollo"
                                    name="carnes"
                                    value="pollo"
                                    onChange={handleChange}
                                    className="admin-radio-input" />
                                Pollo
                            </label>
                            <label className="admin-radio-label">
                                <input
                                    type="radio"
                                    id="mixto"
                                    name="carnes"
                                    value="mixto"
                                    onChange={handleChange}
                                    className="admin-radio-input" />
                                Mixto
                            </label>
                        </div>
                        {errors.carnes && <p className="admin-error">{errors.carnes}</p>}
                    </div>

                    <div className="admin-form-group">
                        <label htmlFor="cantidad" className="admin-label">
                            Cantidad:
                        </label>
                        <input type="number" id="cantidad" name="cantidad" onChange={handleChange} className="admin-input" />
                        {errors.cantidad && <p className="admin-error">{errors.cantidad}</p>}
                    </div>

                    <div className="admin-form-group">
                        <button type="submit" className="admin-button">
                            Realizar Pedido
                        </button>
                    </div>
                </form>
            </div>
        </MainContent>
    )
} export default AdminPage;