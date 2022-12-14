using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo.Entitys
{
    public class Alumno
    {
         
            [Key]
            public int codAlumno { get; set; }

            [Required]
            public int dni { get; set; }

            [Required]
            [StringLength(
                maximumLength: 100,
                ErrorMessage = "Se tiene que ingresar un nombre")]
            public string nombre { get; set; }
            [Required]
            public string apellido { get; set; }

             [Required]
             public string direccion { get; set; }
            [Required]
            public string fchNacimento { get; set; }
            [Required]
            public string correo { get; set; }
            [Required]
            public string nomapeApo { get; set; }
            [Required]
            public int dniApo { get; set; }
            [Required]
            public int  telfApo { get; set; }

            [Required]
            public int codEntrenador { get; set; }
            public Entrenador entrenador { get; set; }

            [Required]
            public int codHorario { get; set; }
            public Horarios horarios { get; set; }
            [Required]
            public int codLocal { get; set; }
            public Locales locales { get; set; }


        public List<Matricula> matricula { get; set; }

    }
}
