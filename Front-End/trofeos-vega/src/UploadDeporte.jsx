import React, { useState } from 'react';

export const UploadImageWithDeporte = () => {
  const [file, setFile] = useState(null);
  const [deporte, setDeporte] = useState({
    id: 0,
    nombre: '',
    descripcion: ''
  });

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeporte({ ...deporte, [name]: value });
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Por favor, selecciona una imagen');
      return;
    }
  
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result.split(',')[1]; // Eliminamos el prefijo 'data:image/...;base64,'
  
      const formData = {
        ...deporte,
        img: base64String, // Asignamos solo la cadena base64
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
          throw new Error('Error al subir el deporte con la imagen');
        }
  
        const data = await response.json();
        console.log('Deporte subido con éxito:', data);
      } catch (error) {
        console.error('Error al subir el deporte:', error);
      }
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
      
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Subir Deporte con Imagen</button>
    </div>
  );
};


