import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponenteMenu from './menu/ComponenteMenu';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import ComponentesPrincipal from './ComponentesPrincipal/ComponentePrincipal';
import rutas from './route-config';

function App() {
  return (
    <div >
      {/* Este es el menu Principal */}
      <ComponenteMenu/>
      {/* Son las rutas del menu Principal */}
      <div className='container'>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/inicio" element={<ComponentesPrincipal/>}/>
        <Route path="/autores" element={<ComponenteListaAutor/>} />
        <Route path="/libros" element={<ComponenteListaLibro/>} /> */}
        {rutas.map(ruta=>
          <Route key={ruta.path} path={ruta.path}
          element={<ruta.componente/>}/>)}
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
