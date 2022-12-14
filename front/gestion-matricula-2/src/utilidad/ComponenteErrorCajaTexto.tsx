export default function ComponenteErrorCampo(props: MostrarErrorCampo){
    return <div className="text-danger mt-4" >
    {props.mensaje}
  </div>;
}

interface MostrarErrorCampo{
    mensaje: string;
}