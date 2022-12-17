import { useParams } from "react-router-dom"
import axios, { AxiosResponse } from "axios";
import { HorariosDTO } from "./horarios.model";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { Formik,Field, Form, ErrorMessage} from "formik";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";



export default function ComponenteRegistrarHorario() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams();  
  const url = "https://localhost:44306/api-horaios/horario/";

  const [horarios, setHorarios] = useState<HorariosDTO>();

  const peticionesGet = async () => {
    await axios
      .get(url+id)
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

  //====================
  const history = useNavigate();

  async function ActualizarHorario(horario:HorariosDTO) {
    try{
     await axios.put(url + id, horario);
       history("/horarios");
    }catch(error){
     console.log(error);
    }
 }
    return (
      <div>
          <h1>Actualizar Horario</h1>
          <Formik initialValues={{
            codHorario:0,
            turno:"",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,3000));
            await ActualizarHorario({
              codHorario: valores.codHorario,
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
          <div className="row mt-2">
               <div className="col-md-6">
                <label className="form-label" htmlFor="codHorario"><h4>Cod Horario:</h4></label>
                <Field name="codHorario" className="form-control" value={horarios?.codHorario} readonly/>
              </div>
              <div className="col-md-6 mt-4">
              <ErrorMessage name="codHorario">
                {(mensaje) => (
                    <div className="container text-danger mt-4" >
                      {mensaje}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="turno"><h4>Turno:</h4></label>
                <Field name="turno" className="form-control" value={horarios?.turno} />
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
            </div> 
            <div className="row ">
              <div className="col-2">
                <button type="submit" className="btn btn-primary mt-4  form-control ">Actualizar</button>
              </div>
              <div  className="col-2">
                <Link className="btn btn-danger mt-4  form-control" to="/horarios">Cancelar</Link>
              </div>
            </div>
          </Form>
          </Formik>
      </div>
    );
  }
  