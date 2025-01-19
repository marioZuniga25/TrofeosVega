import './About.css';

export const About = () => {
  return (
    <div className="company-info">
      <header className="company-header">
        <h1 className="company-name">Trofeos Vega</h1>
        <p className="company-tagline">Conocenos mas</p>
      </header>
      <section className="company-about">
        
        <img className='img-1' src="src\Img\trofeos\trofeo4.jpeg" alt="" />
        <div className="text-about">
            <h2>Sobre Nosotros</h2>
            <p>
                Somos una empresa dedicada a ofrecer soluciones innovadoras en el campo de [industria]. 
                Con años de experiencia, nos esforzamos por brindar un servicio excepcional y satisfacer 
                las necesidades de nuestros clientes.
            </p>
        </div>
        
      </section>
      <section className="company-services">
        <div className='services-text'>
          <h2>Servicios</h2>
          <ul>
            <li>Trofeos Personalizados <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sunt sint pariatur, repellendus ut unde cumque perspiciatis accusantium! Natus distinctio quas quasi. Minima similique a aliquid corporis qui deleniti magnam?
            </li>
            <li>Medallas Personalizada</li>
            <li>Trofeos Niquelados</li>
            <li>Pedidos al Mayoreo</li>
          </ul>
        </div>
        <img src="src\Img\trofeos\WhatsApp Image 2024-09-18 at 12.58.08 PM (2).jpeg" alt="" />
      </section>


      <section className="company-contact">
        <div className='contact-text'>
          <h2>Contacto</h2>
          <p><strong>Email:</strong> contacto@empresa.com</p>
          <p><strong>Teléfono:</strong> +1 234 567 890</p>
          <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
        </div>
        
      </section>

      <footer className="footer">
                <div className="container-footer">
                    <p>&copy; 2025 Trofeos Vega. Todos los derechos reservados.</p>
                </div>

                <ul className="social-icons">
                    <li>
                        <a href="#" target="_blank" className="fab fa-facebook-f"></a>
                        <div className="tooltip">Facebook</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="fab fa-twitter"></a>
                        <div className="tooltip">Twitter</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="fab fa-instagram"></a>
                        <div className="tooltip">Instagram</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="fab fa-linkedin-in"></a>
                        <div className="tooltip">LinkedIn</div>
                    </li>
                </ul>
            </footer>
    </div>
  )
}
