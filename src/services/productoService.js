import axios from 'axios'
const API_URL = "http:/localhost:5000/productos"

const mapProducto = (producto) => ({
    id: producto._id,
    nombre: producto.name,
    descripcion: producto.description,
    precio: producto.price,
    imagen: producto.photo
})

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL)
        const listaDeBBDD = response.data.data ?? response.data
        return listaDeBBDD.map(mapProducto)
    } catch (e) {
        console.error("Error en la petición:", e.message)
        throw e
    }
}

export const getProdcutByID = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`)
        const productBd = response.data.data ?? response.data
        return mapProducto(productBd)
    } catch (e) {
        console.error("Error al encontrar el producto por el id", e.message)
        throw e
    }
}

export const postProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product)

        return response.data
    } catch (e) {
        console.error("Error al añadir el producto", e.message)
        throw e
    }
}