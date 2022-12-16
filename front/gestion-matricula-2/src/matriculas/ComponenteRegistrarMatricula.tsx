import axios from "axios";
import { Formik,Field, Form, ErrorMessage} from "formik";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { MatriculasRegistrarDTO } from "./matriculas.model";

export default function ComponenteRegistrarHorario() {
  const history = useNavigate();
  const url = "https://localhost:44306/api-alumnos/matricula";

  async function RegistrarMatricula(matricula:MatriculasRegistrarDTO) {
     try{
      await axios.post(url, matricula);
         history("/matriculas");
     }catch(error){
      console.log(error);
         history("/matriculas");
     }
  }


    return (
      <div>
          <h1>Registro de Matriculas</h1>
          <Formik initialValues={{
                direccion: "",
                telefono: "",
                codAlumno: "",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,3000));
            await RegistrarMatricula({
                direccion: valores.direccion,
                telefono: valores.telefono,
                codAlumno: valores.codAlumno,
            });
          }}
          validationSchema={
            Yup.object({
            direccion:Yup.string().required("Este campo es requerido")
              .max(50,"La longitud máxima de la Dirección es 50"),

              telefono:Yup.string().required("Este campo es requerido")
              .max(9,"La longitud máxima del télefono es 9"),

              codAlumno:Yup.number().required("Este campo es requerido")
              .max(5,"La longitud máxima del codAlumno es 5"),
            })
          }
          > 
          <Form>
            <ComponenteFormularioCajaTexto campo="direccion" label="Direccion:"/>
            <ComponenteFormularioCajaTexto campo="telefono" label="Telefono:"/>
            <ComponenteFormularioCajaTexto campo="codAlumno" label="Codigo Alumno:"/>
            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Registrar</button>
              </div>
              <div className="col-md-2">
                <Link className="btn btn-danger form-control" to="/matriculas">Cancelar</Link>
              </div>
            </div>
          </Form>
          </Formik>
      </div>
    );
  }
  