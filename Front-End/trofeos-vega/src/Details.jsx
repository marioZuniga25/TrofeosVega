import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Details = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null); 
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      const fetchProducto = async () => {
        try {
          const response = await fetch(`https://localhost:7219/api/Trofeos/${id}`);
          if (!response.ok) {
            throw new Error('Error al obtener los detalles del producto');
          }
          const data = await response.json();
          setProducto(data); 
        } catch (error) {
          setError(error.message); 
        }
      };
  
      fetchProducto();
    }, [id]); 
  
    
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    
    if (!producto) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <h1>Detalles del Producto</h1>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: €{producto.precioU}</p>
        <p>Precio Mayoreo: €{producto.precioMay}</p>
        <p>Piezas para Mayoreo: {producto.pzsMayoreo}</p>
        {producto.img && <img src={`data:image/jpeg;base64,${producto.img}`} alt={producto.nombre} />}
      </div>
    );
  };
