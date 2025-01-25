import './Landing.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        color: 'white',
        padding: '10px',
        fontSize: '30px',
        zIndex: 10,
        cursor: 'pointer',
      };


  return (
    <>
       <div>
            
            <section className="caruosel">
                  <div className="carousel-container">
                      <Carousel
                      showThumbs={false}
                          renderArrowPrev={(onClickHandler, hasPrev, label) => (
                            hasPrev && (
                              <div
                                onClick={onClickHandler}
                                style={{ ...arrowStyle, left: '10px' }}
                                aria-label={label}
                              >
                                <FaArrowAltCircleLeft size={40} color="white" />
                              </div>
                            )
                          )}
                          renderArrowNext={(onClickHandler, hasNext, label) => (
                            hasNext && (
                              <div
                                onClick={onClickHandler}
                                style={{ ...arrowStyle, right: '10px' }}
                                aria-label={label}
                              >
                                <FaArrowAltCircleRight size={40} color="white" />
                              </div>
                            )
                          )}
                          infiniteLoop
                          useKeyboardArrows
                          autoPlay = {true}
                          interval={3000}
                      >
                          <div>
                              <img src="src/Img/banners/Red and Orange Bright and Vibrant Badge Seek Cover Image.png" alt="" />
                          </div>
                          <div>
                              <img src="src/Img/banners/banner2.png" alt="" />
                          </div>
                          <div>
                              <img src="src/Img/banners/banner3.png" alt="" />
                          </div>
                      </Carousel>
                  </div>
            </section>
            <div className="section-title">
                <h1>Productos Destacados</h1>
            </div>
            <section className="products">
                
            <div className="products-container">
                <h2>Trofeos de Futbol</h2>
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
                <a href="/deporte/1"><button className='btn-vermas'>Ver mas</button></a>
            </div>
            <div className="container-x">
            <h2>Trofeos de Basketbol</h2>
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
                <a href="/deporte/2"><button className='btn-vermas'>Ver mas</button></a>
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

                <ul className="social-icons">
                    <li>
                        <a href="#" target="_blank" className="fab fa-facebook-f"></a>
                        <div className="tooltip">Facebook</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="x"></a>
                        <div className="tooltip">Twitter</div>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="fab fa-instagram"></a>
                        <div className="tooltip">Instagram</div>
                    </li>
                    
                </ul>
            </footer>
        </div>
    </>
    
  )
}



