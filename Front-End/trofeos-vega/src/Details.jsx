import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css';


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
      <>
        <header className="details-header">
          <h2>Detalles del Producto</h2>
        </header>

        <div className="details-container">
          <div className="img-product">
            {producto.img && <img src={`data:image/jpeg;base64,${producto.img}`} alt={producto.nombre} />}
          </div>

          <div className="details">

            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p className="precios">
              <strong>Precio:</strong> <span className="precio">€{producto.precioU}</span>
            </p>
            <p className="precios">
              <strong>Precio Mayoreo:</strong> <span className="precio">€{producto.precioMay}</span>
            </p>
            <p className="precios">
              <strong>Piezas para Mayoreo:</strong> <span className="precio">{producto.pzsMayoreo}</span>
            </p>

          </div>

        </div>
      </>
    );
  };
