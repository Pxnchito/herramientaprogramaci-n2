
import ComponentePrincipal from "./ComponentesPrincipal/ComponentePrincipal";
import ComponenteRedireccionar from "./ComponentesPrincipal/ComponenteRedireccionar";
// Horarios
import ComponenteListaHorario from "./horarios/ComponenteListaHorario";
import ComponenteRegistrarHorario from "./horarios/ComponenteRegistrarHorario";
import ComponenteActualizarHorario from "./horarios/ComponenteActualizarHorario";
//Locales
import ComponenteListaLocales from "./locales/ComponenteListaLocales";
import ComponenteActualizarLocal from "./locales/ComponenteActualizarLocales";
import ComponenteRegistrarLocal from "./locales/ComponenteRegistrarLocal";
// Enterenadores
import ComponenteListaEntrenadores from "./entrenadores/ComponenteListaEntrenadores";
import ComponenteActualizarEntrenador from "./entrenadores/ComponenteActualizarEntrenador";
import ComponenteRegistrarEntrenador from "./entrenadores/ComponenteRegistrarEntrenador";
//Alumnos
import ComponenteListaAlumnos from "./alumnos/ComponenteListaAlumnos";
import ComponenteRegistrarAlumno from "./alumnos/ComponenteRegistrarAlumno";
import ComponenteActualizaAlumno from "./alumnos/ComponenteActualizarAlumno";
//Matriculas
import ComponenteListaMatriculas  from "./matriculas/ComponenteListaMatriculas";
import ComponenteRegistrarMatricula  from "./matriculas/ComponenteRegistrarMatricula";
import ComponenteActualizarMatricula from "./matriculas/ComponenteActualizarMatricula";


const rutas=[
{path:'/inicio',componente:ComponentePrincipal },

// Horarios
{path:'/horarios',componente:ComponenteListaHorario},
{path:'/horarios/registrar',componente:ComponenteRegistrarHorario},
{path:'/horarios/actualizar/:id',componente:ComponenteActualizarHorario},
//Locales
{path:'/locales',componente:ComponenteListaLocales},
{path:'/locales/actualizar/:id',componente:ComponenteActualizarLocal},
{path:'/locales/registrar',componente:ComponenteRegistrarLocal},
// Enterenadores
{path:'/entrenadores',componente:ComponenteListaEntrenadores},
{path:'/entrenadores/actualizar/:id',componente:ComponenteActualizarEntrenador},
{path:'/entrenadores/registrar',componente:ComponenteRegistrarEntrenador},
//Alumnos
{path:'/alumnos',componente:ComponenteListaAlumnos},
{path:'/alumnos/actualizar/:id',componente:ComponenteActualizaAlumno},
{path:'/alumnos/registrar',componente:ComponenteRegistrarAlumno},
//Matriculas
{path:'/matriculas',componente:ComponenteListaMatriculas},
{path:'/matriculas/registrar',componente:ComponenteRegistrarMatricula},
{path:'/matriculas/actualizar/:id',componente:ComponenteActualizarMatricula},

//Crando un path para rutas no encontradas, esto simepre va al final
{path:'*',componente:ComponenteRedireccionar}
];

export default rutas;