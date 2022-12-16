import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 import { EntrenadoresDTO } from "./entrenadores.model";

export default function ComponenteListaEntrenadores() {
  //definimos la direccion del END POINT
  const url = "https://localhost:44306/api-entrenadores/entrenador";
  //creamos una variable y una funcion
  const [entrenadores, setEntrenadores] = useState<EntrenadoresDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setEntrenadores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //se llama a la peticion
  useEffect(() => {
    peticionesGet();
  }, []);

  return (
    <div>
      <h1>Lista de Entrenadores</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope="col">Télefono</th>
              <th scope="col">Horario</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {entrenadores?.map((entrenador) => (
              <tr key={entrenador.codEntrenador}>
                <th scope="row">{entrenador.codEntrenador}</th>
                <td>{entrenador.nombre}</td>
                <td>{entrenador.apellido}</td>
                <td>{entrenador.correo}</td>
                <td>{entrenador.telefono}</td>
                <td>{entrenador.codHorario}</td>
                <td>
                  <Link to={`/entrenadores/actualizar/${entrenador.codEntrenador}`}className="btn btn-success">Editar</Link>
                </td>
                <td>
                  <a href="#" className="btn btn-danger">
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a href="entrenadores/registrar" className="btn btn-primary mt-2">
        Registrar Entrenador
      </a>
    </div>
  );
}