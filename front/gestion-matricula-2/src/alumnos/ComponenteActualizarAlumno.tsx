import { useParams } from "react-router-dom"
import axios, { AxiosResponse } from "axios";
import { AlumnosDTO } from "./alumnos.model";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { Formik,Field, Form, ErrorMessage} from "formik";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";

export default function ComponenteActualizarEntrenador() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams(); 
  const history = useNavigate();
  const url = "https://localhost:44306/api-alumnos/alumno/"; 

  const [alumnos, setAlumnos] = useState<AlumnosDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url+id)
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

  async function ActualizarAlumno(alumno:AlumnosDTO) {
    try{
     await axios.put(url + id, alumno);
       history("/alumnos");
    }catch(error){
     console.log(error);
    }
 }


    return (
      <div>
        <h1>Actializar Alumno</h1>
          <Formik initialValues={{
                codAlumno: "",
                dni: "",
                nombre: "",
                apellido: "",
                fchNacimento: "",
                direccion: "",
                correo: "",
            
                nomapeApo: "",
                dniApo: "",
                telfApo: "",
            
                codHorario: "",
                codEntrenador: "",
                codLocal: "",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,3000));
            await ActualizarAlumno({
              codAlumno: valores.codAlumno,
              dni:valores.dni,
              nombre: valores.nombre,
              apellido: valores.apellido,
              fchNacimento: valores.fchNacimento,
              direccion: valores.direccion,
              correo: valores.correo,
          
              nomapeApo: valores.nomapeApo,
              dniApo: valores.dniApo,
              telfApo: valores.telfApo,
          
              codHorario: valores.codHorario,
              codEntrenador: valores.codEntrenador,
              codLocal: valores.codLocal,
            });
          }}
          validationSchema={
            Yup.object({
                dni:Yup.string().required("Este campo es requerido")
              .max(8,"La longitud máxima del turno es 6"),
            })
          }
          > 
          <Form>
            <ComponenteFormularioCajaTexto campo="codAlumno" label="Código Alumno:"  value={alumnos?.codAlumno}/>
            <ComponenteFormularioCajaTexto campo="dni" label="Dni:" value={alumnos?.dni}/>
            <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:" value={alumnos?.nombre}/>
            <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:" value={alumnos?.apellido}/>
            <ComponenteFormularioCajaTexto campo="fchNacimento" label="Fecha de Nacimento:" value={alumnos?.fchNacimento}/>
            <ComponenteFormularioCajaTexto campo="direccion" label="Dirección:"value={alumnos?.direccion}/>
            <ComponenteFormularioCajaTexto campo="correo" label="Correo:" value={alumnos?.correo}/>
            <ComponenteFormularioCajaTexto campo="nomapeApo" label="Apoderado:" value={alumnos?.nomapeApo}/>
            <ComponenteFormularioCajaTexto campo="dniApo" label="DNI del Apoderado:" value={alumnos?.dniApo}/>
            <ComponenteFormularioCajaTexto campo="telfApo" label="Télefono del Apoderado:" value={alumnos?.telfApo}/>

            <div className="row">
            <div className="col-4">
                <ComponenteFormularioCajaTexto campo="codHorario" label="Codigo Horario:" value={alumnos?.codHorario}/>
            </div>
            <div className="col-4">
                <ComponenteFormularioCajaTexto campo="codLocal" label="Codigo Local:" value={alumnos?.codLocal}/>
            </div>
            <div className="col-4">
                <ComponenteFormularioCajaTexto campo="codEntrenador" label="Codigo Entrenador:" value={alumnos?.codEntrenador}/>
            </div>
            </div>

            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Actializar</button>
              </div>
              <div className="col-md-2">
                <Link className="btn btn-danger form-control" to="/alumnos">Cancelar</Link>
              </div>
            </div>
          </Form>
          </Formik>
      </div>
    );
  }