import React, { useState } from 'react';

export const UploadImageWithTrofeo = () => {
  const [file, setFile] = useState(null);
  const [trofeo, setTrofeo] = useState({
    id: 0,
    nombre: '',
    precioU: '',
    precioMay: '',
    descripcion: '',
    pzsMayoreo: ''
  });

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrofeo({ ...trofeo, [name]: value });
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
        ...trofeo,
        img: base64String, // Asignamos solo la cadena base64
      };
  
      try {
        const response = await fetch('https://localhost:7219/api/trofeos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Error al subir el trofeo con la imagen');
        }
  
        const data = await response.json();
        console.log('Trofeo subido con éxito:', data);
      } catch (error) {
        console.error('Error al subir el trofeo:', error);
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
        placeholder="Nombre del Trofeo"
      />
      <input
        type="number"
        name="precioU"
        onChange={handleInputChange}
        placeholder="Precio Unitario"
      />
      <input
        type="number"
        name="precioMay"
        onChange={handleInputChange}
        placeholder="Precio Mayoreo"
      />
      <textarea
        name="descripcion"
        onChange={handleInputChange}
        placeholder="Descripción"
      />
      <input
        type="number"
        name="pzsMayoreo"
        onChange={handleInputChange}
        placeholder="Piezas para Mayoreo"
      />
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Subir Trofeo con Imagen</button>
    </div>
  );
};


