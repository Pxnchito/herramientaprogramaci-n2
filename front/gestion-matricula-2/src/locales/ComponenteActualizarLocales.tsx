import { useParams } from "react-router-dom"

export default function ComponenteRegistrarLocales() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams();  
    return (
      <div>
          <h1>Actualización de Locales</h1>
          <h2>El id es: {id}</h2>
          <div>
              <form className="form-control">
            <div className="row">
              <div className="col-6">
                <label className="form-label">Dirección:</label>
                <input type="text" className="form-control" id="txtDireccion" required />
              </div>
            </div>
            <div className="row ">
              <div className="col-2">
                  <a href="/locales" className="btn btn-primary mt-4 form-control" >Actualizar</a>
              </div>
              <div  className="col-2">
              <a href="/locales" className="btn btn-danger mt-4 form-control" >Cancelar</a>
              </div>
            </div>
          </form>  
          </div>
      </div>
    );
  }
  