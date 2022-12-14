using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo.Entitys
{
    public class Entrenador 
    {

        [Key]
        public int codEntrenador { get; set; }

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
        public string correo { get; set; }
        [Required]
        public int telefono { get; set; }

        [Required]
        public int codHorario { get; set; }

        public Horarios horarios{ get; set; }

        public List<Alumno> Alumnos { get; set; }


    }
}
