import React from 'react';
import ReusableCard from '../components/ReusableCard'; // Ajusta según tu carpeta real

// Mock de datos basado en tu JSON para asegurar que funcione
const mockProduct = {
    nombre: "Alitas",
    descripcion: "Jugosas alitas de pollo con salsa barbacoa.",
    precio: 4.50,
    imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500" // Imagen online para evitar errores de ruta local
};

export default {
    title: 'Components/ReusableCard',
    component: ReusableCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        precio: { control: 'number' },
        foto: { control: 'text' },
    },
};

// 1. Historia Base (Default)
export const Default = {
    args: {
        nombre: mockProduct.nombre,
        precio: mockProduct.precio,
        foto: mockProduct.imagen,
        children: mockProduct.descripcion,
    },
};

// 2. Historia con los estilos de tu marca (Color Primario)
export const MarcaPropia = {
    args: {
        nombre: "Box Kebab Grande",
        precio: 6.00,
        foto: "https://images.unsplash.com/photo-1561651823-34fed0225304?w=500",
        children: "Delicioso kebab grande con carne, verduras y tu salsa favorita.",
    },
    // Añadimos un contenedor para ver cómo se comporta en tu grid
    decorators: [
        (Story) => (
            <div className="p-10 bg-gray-100" style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

// 3. Historia de Error/Sin Imagen
export const SinImagen = {
    args: {
        nombre: "Producto sin foto",
        precio: 0.00,
        foto: "",
        children: "Probando cómo se ve el componente cuando no carga la imagen.",
    },
};

// 4. Historia en Cuadrícula (Layout)
export const CatalogoEjemplo = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50">
            <ReusableCard 
                nombre="Pizza Peperoni" 
                precio={7.00} 
                foto="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500"
            >
                Pizza con rodajas de peperoni y queso fundido.
            </ReusableCard>
            <ReusableCard 
                nombre="Durum Mixto" 
                precio={4.50} 
                foto="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500"
            >
                El clásico de siempre con carne mixta.
            </ReusableCard>
        </div>
    ),
};