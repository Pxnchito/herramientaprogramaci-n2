using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace api_RegistroDeportivo.Entitys
{
    public class Locales
    {
        [Key]
        public int codLocal { get; set; }

        [Required]
        public string direccion { get; set; }

        public List<Alumno> Alumnos { get; set; }
    }
}
