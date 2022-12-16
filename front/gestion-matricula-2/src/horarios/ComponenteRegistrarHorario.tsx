import axios from "axios";
import { Formik,Field, Form, ErrorMessage} from "formik";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { HorariosRegistrarDTO } from "./horarios.model";

export default function ComponenteRegistrarHorario() {
  const history = useNavigate();
  const url = "https://localhost:44306/api-horaios/horario";

  async function RegistrarHorarios(horario:HorariosRegistrarDTO) {
     try{
      await axios.post(url, horario);
         history("/horarios");
     }catch(error){
      console.log(error);
         history("/horarios");
     }
  }


  // const [nombre, setNombre] = useState("");
  // //creamos una funcion para cuando se envie los datos del formulario
  // const handlesubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // mostrar en consola los datos
  //   console.log(nombre);
  // };

  //   const [nombre, setNombre] = useState("");
  // //creamos una funcion para cuando se envie los datos del formulario
  // const handlesubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // mostrar en consola los datos
  //   if(txtTurno.current){
  //     console.log(txtTurno.current.value)
  //   }
  // };

  // const txtTurno = useRef<HTMLInputElement>(null);
 

    return (
      <div>
          <h1>Registro de Horario</h1>
          <Formik initialValues={{
            turno:"",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,3000));
            await RegistrarHorarios({
              turno: valores.turno,
            });
          }}
          validationSchema={
            Yup.object({
              turno:Yup.string().required("Este campo es requerido")
              .max(6,"La longitud máxima del turno es 6"),
            })
          }
          > 
          <Form>
            {/* <div className="row mt-2">
               <div className="col-md-6">
                <label className="form-label" htmlFor="turno"><h4>Turno:</h4></label>
                <Field name="turno" className="form-control"  />
              </div>
              <div className="col-md-6 mt-4">
              <ErrorMessage name="turno">
                {(mensaje) => (
                    <div className="container text-danger mt-4" >
                      {mensaje}
                    </div>
                  )}
                </ErrorMessage>
              </div>
            </div> */}
            <ComponenteFormularioCajaTexto campo="turno" label="Turno:"/> {/*Metodo llamado de utilidades */}
            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Registrar</button>
              </div>
              <div className="col-md-2">
                <Link className="btn btn-danger form-control" to="/horarios">Cancelar</Link>
              </div>
            </div>
          </Form>
          </Formik>
      </div>
    );
  }
  