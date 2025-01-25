import './App.css';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Landing } from './Landing';
import { NotFound } from './NotFound.jsx';
import { About } from './About.jsx';
import { Catalogo } from './Catalogo.jsx';
import { UploadImageWithTrofeo } from './Upload.jsx';
import { Contact } from './Contact.jsx';
import { Details } from './Details.jsx';
import { UploadImageWithDeporte } from './UploadDeporte.jsx';
import { DeporteProducts } from './DeporteProducts.jsx';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src="/TrofeosVegaLogo-removebg.png" alt="" />
          <h3>Trofeos Vega</h3>
        </div>
        <div className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/products">Catálogo</Link>
          <Link to="/contact">Contáctanos</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Catalogo />} />
        <Route path="/contact" element= {<Contact />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/deporte/:id" element={<DeporteProducts />}></Route>
        <Route path='/upload' element={<UploadImageWithTrofeo />}></Route>
        <Route path='/uploadDeporte' element={<UploadImageWithDeporte />}></Route>
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
