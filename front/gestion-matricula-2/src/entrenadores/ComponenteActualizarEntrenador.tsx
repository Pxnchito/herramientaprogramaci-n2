import { useParams } from "react-router-dom"
import axios, { AxiosResponse } from "axios";
import { EntrenadoresDTO } from "./entrenadores.model";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { Formik,Field, Form, ErrorMessage} from "formik";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";

export default function ComponenteActualizarEntrenador() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams(); 
  const history = useNavigate();
  const url = "https://localhost:44306/api-entrenadores/entrenador/"; 

  const [entrenadores, setEntrenadores] = useState<EntrenadoresDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url+id)
      .then((response) => {
        setEntrenadores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //se llama a la peticion
  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarEntrenador(entrenador:EntrenadoresDTO) {
    try{
     await axios.put(url + id, entrenador);
       history("/entrenadores");
    }catch(error){
     console.log(error);
    }
 }


    return (
      <div>
        <h1>Actualizar Entrendor</h1>
          <Formik initialValues={{
            codEntrenador: "",
            dni:"",
            nombre: "",
            apellido:"" ,
            correo: "",
            telefono:"" ,
            codHorario: "",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,3000));
            await ActualizarEntrenador({
                codEntrenador: valores.codEntrenador,
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
            <ComponenteFormularioCajaTexto campo="codEntrenador" label="codEntrenador:" value={entrenadores?.codEntrenador}/>
            <ComponenteFormularioCajaTexto campo="dni" label="dni:" value={entrenadores?.dni} />
            <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:" value={entrenadores?.nombre}/>
            <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:" value={entrenadores?.apellido}/>
            <ComponenteFormularioCajaTexto campo="correo" label="Correo:" value={entrenadores?.correo}/>
            <ComponenteFormularioCajaTexto campo="telefono" label="Télefono:" value={entrenadores?.telefono}/>
            <ComponenteFormularioCajaTexto campo="codHorario" label="Cod Horario:" value={entrenadores?.codHorario}/>
            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Actualizar</button>
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