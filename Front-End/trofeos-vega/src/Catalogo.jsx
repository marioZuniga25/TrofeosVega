import './Catalogo.css';
import { useEffect, useState } from 'react';

export const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://localhost:7219/api/Trofeos');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error.message.includes('431')) {
          console.warn('Error 431: Los encabezados son demasiado grandes');
          setError('El tamaño de los encabezados es demasiado grande.');
          // No hacemos nada para evitar que se muestre en la consola
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

  return (
    <div className="container-catalogo">

      <header className="company-header">
        <h1 className="company-name">Catologo</h1>
        <p className="company-tagline">Nuestros Productos</p>
      </header>


      <div className="product-cards">
        {products.map((product) => (
        <div className="card" key={product.id}>
          {product.img && <img src={`data:image/jpeg;base64,${product.img}`} alt={product.nombre} className='img-Catalogo' />}
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <p>Precio Unitario: €{product.precioU}</p>
          <p>Precio Mayoreo: €{product.precioMay}</p>
          <p>Piezas para Mayoreo: {product.pzsMayoreo}</p>
        </div>
        ))}
      </div>
    </div>
  );
};
