import { useNavigate } from 'react-router-dom';
import './Catalogo.css';
import { useEffect, useState } from 'react';

export const Catalogo = () => {
  const [deportes, setDeportes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  var idDeporte = 0;
  // Cargar productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://localhost:7219/api/Deportes');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setDeportes(data);
      } catch (error) {
        if (error.message.includes('431')) {
          console.warn('Error 431: Los encabezados son demasiado grandes');
          setError('El tamaño de los encabezados es demasiado grande.');
        } else {
          console.error('Error fetching products:', error);
        }
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }



 
  const handleDeporte = (id) => {
    navigate(`/deporte/${id}`);
  };

  return (
    <div className="container-catalogo">
      <header className="company-header">
        <h1 className="company-name">Catálogo</h1>
        <p className="company-tagline">Nuestros Productos</p>
      </header>

      <div className="product-cards">
      {deportes.map((deporte) => (
          <div 
            className="card" 
            key={deporte.id} 
            onClick={() => handleDeporte(deporte.id)} // Llamar a handleDetails con el id del producto
          >
            {deporte.img && <img src={`data:image/jpeg;base64,${deporte.img}`} alt={deporte.nombre} className="img-Catalogo" />}
            <h2>{deporte.nombre}</h2>
            <p>{deporte.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
