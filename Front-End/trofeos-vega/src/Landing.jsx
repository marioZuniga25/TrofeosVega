import './Landing.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Landing = () => {

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,  // Asegura que las slides estén centradas
        centerPadding: '0', 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


  return (
    <>
       <div>
            <header className="header">
                <div className="container">
                    <h1>Bienvenido a Trofeos Vega</h1>
                    <p>Comprometidos con la excelencia</p>
                </div>
            </header>

            <section className="products">
            <div className="container">
                <h2>Productos Destacados</h2>
                <Slider {...carouselSettings}>
                    <div className="product">
                        <img src="src/Img/trofeos/trofeo1.jpeg" alt="Producto 1" className="product-image" />
                        <h3>Trofeo 1</h3>
                        <p>Descripción breve del producto.</p>
                    </div>
                    <div className="product">
                        <img src="src/Img/trofeos/trofeo2.jpeg" alt="Producto 2" className="product-image" />
                        <h3>Trofeo 2</h3>
                        <p>Descripción breve del producto.</p>
                    </div>
                    <div className="product">
                        <img src="src/Img/trofeos/trofeo3.jpeg" alt="Producto 3" className="product-image" />
                        <h3>Trofeo 3</h3>
                        <p>Descripción breve del producto.</p>
                    </div>
                    <div className="product">
                        <img src="src/Img/trofeos/trofeo7.jpeg" alt="Producto 4" className="product-image" />
                        <h3>Trofeo 4</h3>
                        <p>Descripción breve del producto.</p>
                    </div>
                    <div className="product">
                        <img src="src/Img/trofeos/trofeo5.jpeg" alt="Producto 5" className="product-image" />
                        <h3>Trofeo 5</h3>
                        <p>Descripción breve del producto.</p>
                    </div>
                </Slider>
            </div>
        </section>

            <section className="about">
                <div className="container">
                    <h2>Sobre Nosotros</h2>
                    <p>En [Nombre de tu Tienda], somos fabricantes de trofeos deportivos de alta calidad, ideales para premiar el esfuerzo y 
                        la dedicación en cada competencia. Ofrecemos diseños personalizados que se adaptan a cualquier deporte, desde fútbol y
                        baloncesto hasta atletismo y deportes de aventura. Nuestros trofeos están hechos con materiales duraderos y cuentan con detalles 
                        que reflejan la grandeza de cada logro. ¡Haz que cada victoria sea memorable con nuestros trofeos exclusivos!.</p>
                </div>
            </section>

            <footer className="footer">
                <div className="container-footer">
                    <p>&copy; 2025 Trofeos Vega. Todos los derechos reservados.</p>
                </div>

                <ul class="social-icons">
                    <li>
                        <a href="#" target="_blank" class="fab fa-facebook-f"></a>
                        <div class="tooltip">Facebook</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" class="fab fa-twitter"></a>
                        <div class="tooltip">Twitter</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" class="fab fa-instagram"></a>
                        <div class="tooltip">Instagram</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" class="fab fa-linkedin-in"></a>
                        <div class="tooltip">LinkedIn</div>
                    </li>
                </ul>
            </footer>
        </div>
    </>
    
  )
}



