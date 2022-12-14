import { useParams } from "react-router-dom"

export default function ComponenteRegistrarHorario() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams();  
    return (
      <div>
          <h1>Actualización de Entrenador</h1>
          <h2>El id es: {id}</h2>
          <div>
              <form className="form-control">
            <div className="row">
              <div className="">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="txtNombre" required />
              </div>
              <div className="">
                <label className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="txtApellido" required />
              </div>
              <div className="">
                <label className="form-label">Correo:</label>
                <input type="text" className="form-control" id="txtCorreo" required />
              </div>
              <div className="">
                <label className="form-label">Télefono:</label>
                <input type="text" className="form-control" id="txtTelefono" required />
              </div>
              <div className="">
                <label className="form-label">Horario:</label>
                <input type="text" className="form-control" id="txtHorario" required />
              </div>
            </div>
            <div className="row ">
              <div className="col-2">
                  <a href="/entrenadores" className="btn btn-primary mt-4 form-control" >Actualizar</a>
              </div>
              <div  className="col-2">
              <a href="/entrenadores" className="btn btn-danger mt-4 form-control" >Cancelar</a>
              </div>
            </div>
          </form>  
          </div>
      </div>
    );
  }
  