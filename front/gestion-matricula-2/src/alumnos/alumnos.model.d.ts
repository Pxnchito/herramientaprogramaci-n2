export interface AlumnosDTO{
    codAlumno: Integer;
    dni: Integer;
    nombre: string;
    apellido: string;
    fchNacimento: string;
    direccion: string;
    correo: string;

    nomapeApo: string;
    dniApo: Integer;
    telfApo: Integer;

    codHorario: Integer;
    codEntrenador: Integer;
    codLocal: Integer;
}


export interface AlumnoRegistrarDTO{
    dni: Integer;
    nombre: string;
    apellido: string;
    fchNacimento: string;
    direccion: string;
    correo: string;

    nomapeApo: string;
    dniApo: Integer;
    telfApo: Integer;

    codHorario: Integer;
    codEntrenador: Integer;
    codLocal: Integer;
}
