import axios from "axios";
import { Formik,Field, Form, ErrorMessage} from "formik";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { AlumnoRegistrarDTO } from "./alumnos.model";

export default function ComponenteRegistrarAlumno() {
  const history = useNavigate();
  const url = "https://localhost:44306/api-alumnos/alumno";

  async function RegistrarAlumno(alumnos:AlumnoRegistrarDTO) {
     try{
      await axios.post(url, alumnos);
      history("/alumnos");
     }catch(error){
      console.log(error);
      history("/alumnos");
     }
  }


    return (
      <div>
          <h1>Registro de Alumno</h1>
          <Formik initialValues={{
  
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
            await RegistrarAlumno({
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
              .max(8,"La longitud máxima del DNI es 8"),
            })
          }
          > 
          <Form>
            <ComponenteFormularioCajaTexto campo="dni" label="Dni:"/>
            <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:"/>
            <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:"/>
            <ComponenteFormularioCajaTexto campo="fchNacimento" label="Fecha de Nacimento:"/>
            <ComponenteFormularioCajaTexto campo="direccion" label="Dirección:"/>
            <ComponenteFormularioCajaTexto campo="correo" label="Correo:"/>
            <ComponenteFormularioCajaTexto campo="nomapeApo" label="Apoderado:"/>
            <ComponenteFormularioCajaTexto campo="dniApo" label="DNI del Apoderado:"/>
            <ComponenteFormularioCajaTexto campo="telfApo" label="Télefono del Apoderado:"/>
            <ComponenteFormularioCajaTexto campo="codHorario" label="Codigo del  Horario:"/>
            <ComponenteFormularioCajaTexto campo="codLocal" label="Codigo del  Local:"/>
            <ComponenteFormularioCajaTexto campo="codEntrenador" label="Codigo del Entrenador:"/>
            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Registrar</button>
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
  