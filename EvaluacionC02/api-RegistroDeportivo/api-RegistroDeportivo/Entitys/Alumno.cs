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
            public int dni { get; set; }

            [Required]
            [StringLength(
                maximumLength: 100,
                ErrorMessage = "Se tiene que ingresar un nombre")]
            public string nombre { get; set; }
            [Required]
            public string apellido { get; set; }

            public string departamento { get; set; }

            public string distrito { get; set; }

            public string edad { get; set; }

            public List<Matricula> matricula { get; set; }
    }
}
