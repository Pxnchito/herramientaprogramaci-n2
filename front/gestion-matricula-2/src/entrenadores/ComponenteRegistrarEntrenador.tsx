import axios from "axios";
import { Formik,Field, Form, ErrorMessage} from "formik";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { EntrenadoresRegistrarDTO } from "./entrenadores.model";

export default function ComponenteRegistrarHorario() {
  const history = useNavigate();
  const url = "https://localhost:44306/api-entrenadores/entrenador";

  async function RegistrarEntrenador(entrenador:EntrenadoresRegistrarDTO) {
     try{
      await axios.post(url, entrenador);
        history("/entrenadores");
     }catch(error){
        console.log(error);
        history("/entrenadores");
     }
  }


 

    return (
      <div>
          <h1>Registro de Entrendor</h1>
          <Formik initialValues={{
            dni:"",
            nombre: "",
            apellido:"" ,
            correo: "",
            telefono:"" ,
            codHorario: "",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,3000));
            await RegistrarEntrenador({
                dni: valores.dni,
                nombre: valores.nombre,
                apellido: valores.apellido,
                correo: valores.correo,
                telefono: valores.telefono,
                codHorario: valores.codHorario,
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
            <ComponenteFormularioCajaTexto campo="dni" label="dni:"/>
            <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:"/>
            <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:"/>
            <ComponenteFormularioCajaTexto campo="correo" label="Correo:"/>
            <ComponenteFormularioCajaTexto campo="telefono" label="Télefono:"/>
            <ComponenteFormularioCajaTexto campo="codHorario" label="Cod Horario:"/>
            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Registrar</button>
              </div>
              <div className="col-md-2">
                <Link className="btn btn-danger form-control" to="/entrenadores">Cancelar</Link>
              </div>
            </div>
          </Form>
          </Formik>
      </div>
    );
  }
  