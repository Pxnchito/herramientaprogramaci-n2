import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 import { MatriculasDTO } from "./matriculas.model";

export default function ComponenteListaEntrenadores() {
  //definimos la direccion del END POINT
  const url = "https://localhost:44306/api-alumnos/matricula";
  //creamos una variable y una funcion
  const [matriculas, setMatriculas] = useState<MatriculasDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setMatriculas(response.data);
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
      <h1>Lista de Matriculas</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Dirección</th>
              <th scope="col">Télefono</th>
              <th scope="col">CodAlumno</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {matriculas?.map((matricula) => (
              <tr key={matricula.codmatricula}>
                <th scope="row">{matricula.codmatricula}</th>
                <td>{matricula.direccion}</td>
                <td>{matricula.telefono}</td>
                <td>{matricula.codAlumno}</td>
                <td>
                  <Link to={`/matriculas/actualizar/${matricula.codmatricula}`}className="btn btn-success">Editar</Link>
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

      <a href="matriculas/registrar" className="btn btn-primary mt-2">
        Registrar Matricula
      </a>
    </div>
  );
}