import { Fragment, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from './components/Footer'
import { Producto } from "./components/Producto";
import { Changuito } from "./components/Changuito";
import './style/master.css'
import { UseLocalStorage } from "./components/useLocalStorage";

function App() {

  const [productos, setProducto] = useState([
    { id: 1, nombre: 'Guitarra', precio: 80000 },
    { id: 2, nombre: 'Bateria', precio: 200000 },
    { id: 3, nombre: 'Microfono', precio: 30000 },
    { id: 4, nombre: 'Atril', precio: 10000 }
  ]);

  const [changuito, setChanguito] = UseLocalStorage('List', []);

  return (
    <Fragment>
      <Header
        titulo='Carrito de Compras' />
      <div className="row m-0 ">
        <div className="col-6">
          <h3 className="text-center py-3">Listado de Productos</h3>
          {productos.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
              productos={productos}
              changuito={changuito}
              setChanguito={setChanguito} />
          ))}
        </div>
        <div className="col-6">
          <Changuito
            changuito={changuito} />
        </div>
      </div>
      <div className="text-center footer">
        <Footer />
      </div>


    </Fragment>


  );
}

export default App;
