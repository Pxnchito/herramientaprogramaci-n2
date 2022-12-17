import { useParams } from "react-router-dom"
import axios, { AxiosResponse } from "axios";
import { LocalesDTO } from "./locales.model";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { Formik,Field, Form, ErrorMessage} from "formik";

import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";

export default function ComponenteActualizarLocales() {
  //Creamos una variable para capturar el codigo que se va actualizar
  const {id}:any=useParams(); 

  const url = "https://localhost:44306/api-locales/local/";

  const [locales, setLocales] = useState<LocalesDTO>();
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

  async function ActualizarLocal(local:LocalesDTO) {
    try{
     await axios.put(url + id, local);
       history("/locales");
    }catch(error){
     console.log(error);
    }
 }
    return (
      <div>
          <h1>Actualizar Local</h1>
          <Formik initialValues={{
             codLocal: "",
             direccion:"",
          }}
          onSubmit={async (valores)=>{
            await new Promise((r)=>setTimeout(r,2000));
            await ActualizarLocal({
              codLocal: valores.codLocal,
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

          <div className="row mt-2">
            <ComponenteFormularioCajaTexto campo="codEntrenador" label="Código Local:" value={locales?.codLocal}/>
            <ComponenteFormularioCajaTexto campo="direccion" label="Dirección:" value={locales?.direccion}/>
            </div>

            <div className="row mt-4 ">
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary form-control ">Actualizar</button>
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