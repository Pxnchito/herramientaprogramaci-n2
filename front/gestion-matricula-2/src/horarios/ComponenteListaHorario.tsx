import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 import { HorariosDTO } from "./horarios.model";

export default function ComponenteListaHorarios() {
  // const urlautor = "https://localhost:44367/api-autores/autor";
  // const [autores, setAutores] = useState<AutorDTO[]>();
  // useEffect(() => {
  //   axios.get(urlautor).then((respuesta: AxiosResponse<AutorDTO[]>) => {
  //     console.log(respuesta.data);
  //     setAutores(respuesta.data);
  //   });
  // }, []);

  //definimos la direccion del END POINT
  const url = "https://localhost:44306/api-horaios/horario";
  //creamos una variable y una funcion
  //variable --> horarios
  //funcion --> setHorarios
  const [horarios, setHorarios] = useState<HorariosDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setHorarios(response.data);
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
      <h1>Lista de Horarios</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Turno</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {horarios?.map((horario) => (
              <tr key={horario.codHorario}>
                <th scope="row">{horario.codHorario}</th>
                <td>{horario.turno}</td>
                <td>
                  <a
                    href="/horarios/actualizar/${horario.codHorario}"
                    className="btn btn-success"
                  >
                    Editar
                  </a>
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

      <a href="horarios/registrar" className="btn btn-primary mt-2">
        Registrar Horario
      </a>
    </div>
  );
}