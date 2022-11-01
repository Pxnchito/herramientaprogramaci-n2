using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo.Entitys
{
    public class Matricula
    {
        [Key]
        public int codigo { get; set;}
        
        [Required]
        [StringLength(
                maximumLength: 50,
                ErrorMessage = "Se tiene que ingresar un nombre")]
        public string direccion { get; set; }
        [Required]
        public string telefono { get; set; }

        [Required]
        public int dni { get; set; }
        
        public Alumno alumno { get; set; }
    }
}
