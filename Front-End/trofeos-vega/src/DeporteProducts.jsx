import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './DeporteProducts.css';


export const DeporteProducts = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null); 
    const [deporte, setDeporte] = useState(null); 
    const [error, setError] = useState(null); 
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProducto = async () => {
        try {
          const response = await fetch('https://localhost:7219/api/Trofeos/PDeporte?idDeporte='+id);
          if (!response.ok) {
            throw new Error('Error al obtener los detalles del producto');
          }
          const data = await response.json();
          setProducto(data); 
        } catch (error) {
          setError(error.message); 
        }
      };

      const fetchDeporte = async () => {
        try {
          const response = await fetch('https://localhost:7219/api/Deportes/'+id);
          if (!response.ok) {
            throw new Error('Error al obtener los detalles del deporte');
          }
          const data = await response.json();
          setDeporte(data); 
        } catch (error) {
          setError(error.message); 
        }
      };
      
      fetchProducto();
      fetchDeporte();
      console.log(deporte);
    }, [id]); 
    
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    
    if (!producto) {
      return <div>Cargando...</div>;
    }

    
  const handleDetails = (id) => {
    navigate(`/detail/${id}`);
  };
  
    return (
      <div>
        <header className="dProducts-header">
          <h1>Trofeos de {deporte ? deporte.nombre : 'Cargando deporte...'}</h1>
        </header>
        
        <div className="product-cards">
        {producto.map((producto) => (
          <div 
            className="product-card" 
            key={producto.id} 
            onClick={() => handleDetails(producto.id)} // Llamar a handleDetails con el id del producto
          >
            {producto.img && <img src={`data:image/jpeg;base64,${producto.img}`} alt={producto.nombre} className="img-Catalogo" />}
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
          </div>
        ))}
        </div>

    </div>
    );
  };
