import { useParams } from "react-router-dom"
import axios, { AxiosResponse } from "axios";
import { MatriculasDTO } from "./matriculas.model";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { Formik,Field, Form, ErrorMessage} from "formik";

import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";

export default function ComponenteActualizarLocales() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams(); 

  const url = "https://localhost:44306/api-alumnos/matricula/";

  const [matriculas, setLocales] = useState<MatriculasDTO>();
  const peticionesGet = async () => {
    await axios
      .get(url+id)
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

  const history = useNavigate();

  async function ActualizarMatricula(matricula:MatriculasDTO) {
    try{
     await axios.put(url + id, matricula);
       history("/matriculas");
    }catch(error){
     console.log(error);
    }
 }
    return (
      <div>
          <h1>Actuazlizar Matricula</h1>
          <Formik initialValues={{
                codmatricula: "",
                direccion: "",
                telefono: "",
                codAlumno: "",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,2000));
            await ActualizarMatricula({
                codmatricula: valores.codmatricula,
                direccion: valores.direccion,
                telefono: valores.telefono,
                codAlumno: valores.codAlumno,
            });
          }}
          validationSchema={
            Yup.object({
                direccion:Yup.string().required("Este campo es requerido")
              .max(30,"La longitud máxima de direcciónes 30"),
            })
          }
          > 
          <Form>

          <div className="row mt-2">
           <ComponenteFormularioCajaTexto campo="codmatricula" label="Código Matricula:" value={matriculas?.codmatricula}/>
            <ComponenteFormularioCajaTexto campo="direccion" label="Direccion:" value={matriculas?.direccion}/>
            <ComponenteFormularioCajaTexto campo="telefono" label="Telefono:"  value={matriculas?.telefono}/>
            <ComponenteFormularioCajaTexto campo="codAlumno" label="Codigo Alumno:"  value={matriculas?.codAlumno}/>
            </div>

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