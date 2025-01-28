import React, { useState } from 'react';

export const UploadImageWithDeporte = () => {
  const [file, setFile] = useState(null);
  const [fileFondo, setFileFondo] = useState(null); // Nuevo estado para la imagen de fondo
  const [deporte, setDeporte] = useState({
    id: 0,
    nombre: '',
    descripcion: '',
    img: '', // Campo para la imagen
    imgFondo: '', // Campo para la imagen de fondo
  });

  // Manejar la carga de la imagen principal
  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  // Manejar la carga de la imagen de fondo
  const handleFondoUpload = (event) => {
    setFileFondo(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeporte({ ...deporte, [name]: value });
  };

  const handleSubmit = async () => {
    if (!file || !fileFondo) {
      alert('Por favor, selecciona tanto una imagen como una imagen de fondo');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result.split(',')[1]; // Eliminamos el prefijo 'data:image/...;base64,'
      
      // Leemos la imagen de fondo
      const readerFondo = new FileReader();
      readerFondo.onloadend = async () => {
        const base64StringFondo = readerFondo.result.split(',')[1]; // Eliminamos el prefijo 'data:image/...;base64,'
        
        // Asignamos ambas imágenes al formData
        const formData = {
          ...deporte,
          img: base64String, // Imagen principal
          imgFondo: base64StringFondo, // Imagen de fondo
        };

        try {
          const response = await fetch('https://localhost:7219/api/Deportes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error('Error al subir el deporte con las imágenes');
          }

          const data = await response.json();
          console.log('Deporte subido con éxito:', data);
        } catch (error) {
          console.error('Error al subir el deporte:', error);
        }
      };
      readerFondo.readAsDataURL(fileFondo);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="text"
        name="nombre"
        onChange={handleInputChange}
        placeholder="Nombre del Deporte"
      />
      <textarea
        name="descripcion"
        onChange={handleInputChange}
        placeholder="Descripción"
      />
      
      <label htmlFor=""><strong>Imagen</strong> </label>
      <input type="file" onChange={handleImageUpload} />

      <label htmlFor=""><strong>imgFondo</strong></label>
      <input type="file" onChange={handleFondoUpload} /> {/* Nuevo input para la imagen de fondo */}
      <button onClick={handleSubmit}>Subir Deporte con Imágenes</button>
    </div>
  );
};
