import { useParams } from "react-router-dom"

export default function ComponenteRegistrarAlumno() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams();  
    return (
      <div>
          <h1>Actualización de Alumnos</h1>
          <h2>El id es: {id}</h2>
          <div>
              <form className="form-control">
            <div className="row">
              <div className="col-6">
                <label className="form-label">Turno:</label>
                <input type="text" className="form-control" id="txtTurno" required />
              </div>
            </div>
            <div className="row ">
              <div className="col-2">
                  <a href="/alumnos" className="btn btn-primary mt-4 form-control" >Actualizar</a>
              </div>
              <div  className="col-2">
              <a href="/alumnos" className="btn btn-danger mt-4 form-control" >Cancelar</a>
              </div>
            </div>
          </form>  
          </div>
      </div>
    );
  }
  