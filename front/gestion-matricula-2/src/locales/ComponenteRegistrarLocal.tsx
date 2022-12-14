import axios from "axios";
import { Formik,Field, Form, ErrorMessage} from "formik";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { LocalesRegistrarDTO } from "./locales.model";

export default function ComponenteRegistrarHorario() {
  const  history = useNavigate();
  const url = "https://localhost:44306/api-locales/local";

  async function RegistrarLocales(local:LocalesRegistrarDTO) {
     try{
      await axios.post(url, local);
       history("/locales");
     }catch(error){
      history("/locales");
      console.log(error);
     }
  }



    return (
      <div>
          <h1>Registro de Local</h1>
          <Formik initialValues={{
            direccion:"",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,2000));
            await RegistrarLocales({
                direccion: valores.direccion,
            });
          }}
          validationSchema={
            Yup.object({
                direccion:Yup.string().required("Este campo es requerido")
              .max(30,"La longitud máxima del turno es 6"),
            })
          }
          > 
          <Form>
            <ComponenteFormularioCajaTexto campo="direccion" label="Dirección:"/> {/*Metodo llamado de utilidades */}
            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Registrar</button>
              </div>
              <div className="col-md-2">
                <Link className="btn btn-danger form-control" to="/locales">Cancelar</Link>
              </div>
            </div>
          </Form>
          </Formik>
      </div>
    );
  }