export interface EntrenadoresDTO{
    codEntrenador: Integer;
    dni: Integer;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: Integer;
    codHorario: Integer;
}

export interface EntrenadoresRegistrarDTO{
    dni: Integer;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: Integer;
    codHorario: Integer;
}