using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo.Entitys
{
    public class Horarios
    {
        [Key]
        public int codHorario { get; set; }

        [Required]
        [StringLength(
        maximumLength: 10,
        ErrorMessage = "Se tiene que ingresar un turno")]
        public string turno { get; set; }
        public List<Entrenador> entrenador { get; set; }
        public List<Alumno> Alumnos { get; set; }
    }
}
