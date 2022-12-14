import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 import { AlumnosDTO } from "./alumnos.model";

export default function ComponenteListaEntrenadores() {
  // const urlautor = "https://localhost:44367/api-autores/autor";
  // const [autores, setAutores] = useState<AutorDTO[]>();
  // useEffect(() => {
  //   axios.get(urlautor).then((respuesta: AxiosResponse<AutorDTO[]>) => {
  //     console.log(respuesta.data);
  //     setAutores(respuesta.data);
  //   });
  // }, []);

  //definimos la direccion del END POINT
  const url = "https://localhost:44306/api-alumnos/alumno";
  //creamos una variable y una funcion
  //variable --> horarios
  //funcion --> setHorarios
  const [alumnos, setAlumnos] = useState<AlumnosDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setAlumnos(response.data);
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
      <h1>Lista de Alumnos</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Código</th>
              <th scope="col">DNI</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Dirección</th>
              <th scope="col">Fch de Nacimiento</th>
              <th scope="col">Correo</th>
              <th scope="col">Apoderado</th>
              <th scope="col">DNI</th>
              <th scope="col">Télefono</th>
              <th scope="col">CodEntrenador</th>
              <th scope="col">CodHorario</th>
              <th scope="col">CodLocal</th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {alumnos?.map((alumno) => (
              <tr key={alumno.codAlumno}>
                <td>
                  <a href="/alumnos/actualizar/${alumno.codAlumno}" className="btn btn-success">
                    Editar
                  </a>
                  <a href="#" className="btn btn-danger mt-2">
                    Eliminar
                  </a>
                </td>
                <th scope="row">{alumno.codAlumno}</th>
                <td>{alumno.dni}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.direccion}</td>
                <td>{alumno.fchNacimento}</td>
                <td>{alumno.correo}</td>
                <td>{alumno.nomapeApo}</td>
                <td>{alumno.dniApo}</td>
                <td>{alumno.telfApo}</td>
                <td>{alumno.codEntrenador}</td>
                <td>{alumno.codHorario}</td>
                <td>{alumno.codLocal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a href="alumnos/registrar" className="btn btn-primary mt-2">
        Registrar Alumno
      </a>
    </div>
  );
}