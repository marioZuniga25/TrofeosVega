import { useState } from "react";
import './Contact.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      return (
        <div className="contacto-container">
          <h2 className="contacto-title">¡Estamos aquí para ayudarte!</h2>
          <p className="contacto-message">
            Si tienes alguna duda o aclaración, no dudes en contactarnos. Completa el formulario
            a continuación y nos pondremos en contacto contigo lo antes posible.
          </p>
          <form className="contacto-form">
                <div className="contacto-input-group">
                    <label htmlFor="nombre" className="contacto-label">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="contacto-input"
                        required
                    />
                </div>
            
                <div className="contacto-input-group">
                    <label htmlFor="correo" className="contacto-label">Correo Electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="contacto-input"
                        required
                    />
                </div>
    
                <div className="contacto-input-group">
                    <label htmlFor="mensaje" className="contacto-label">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="contacto-textarea"
                        required
                    />
                </div>
    
            <button type="submit" className="contacto-button">Enviar</button>
            </form>
        </div>
        );
}
