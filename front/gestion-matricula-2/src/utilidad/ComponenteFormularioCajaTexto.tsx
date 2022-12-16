import { ErrorMessage, Field } from "formik";
import ComponenteErrorCampo from "./ComponenteErrorCajaTexto";

export default function ComponenteFormularioCajaTexto(props: FormularioCajaTexto){
    return (
        <div className="row mt-2">
        <div className="col-md-6">
        {props.label ? <label className="form-label" 
        htmlFor={props.campo}><h4>{props.label}</h4></label>:null}
         <Field name={props.campo} value={props.value} className="form-control" />
       </div>
       <div className="col-md-6 mt-4">
       <ErrorMessage name={props.campo}>
         {(mensaje) => <ComponenteErrorCampo
            mensaje={mensaje}/>}
         </ErrorMessage>
       </div>
     </div>
    );
}

interface FormularioCajaTexto {
    campo:string;
    label?:string;
    placeholder?:string;
    value?:string;
}