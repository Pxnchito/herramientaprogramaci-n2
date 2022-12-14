import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 import { LocalesDTO } from "./locales.model";

export default function ComponenteListaLocales() {
  // const urlautor = "https://localhost:44367/api-autores/autor";
  // const [autores, setAutores] = useState<AutorDTO[]>();
  // useEffect(() => {
  //   axios.get(urlautor).then((respuesta: AxiosResponse<AutorDTO[]>) => {
  //     console.log(respuesta.data);
  //     setAutores(respuesta.data);
  //   });
  // }, []);

  //definimos la direccion del END POINT
  const url = "https://localhost:44306/api-locales/local";
  //creamos una variable y una funcion
  //variable --> horarios
  //funcion --> setHorarios
  const [locales, setLocales] = useState<LocalesDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setLocales(response.data);
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
      <h1>Lista de Locales</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Dirección</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {locales?.map((local) => (
              <tr key={local.codLocal}>
                <th scope="row">{local.codLocal}</th>
                <td>{local.direccion}</td>
                <td>
                  <a href="/locales/actualizar/${local.codLocal}"className="btn btn-success">Editar</a>
                </td>
                <td>
                  <a href="#" className="btn btn-danger">Eliminar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a href="locales/registrar" className="btn btn-primary mt-2">
        Registrar Local
      </a>
    </div>
  );
}