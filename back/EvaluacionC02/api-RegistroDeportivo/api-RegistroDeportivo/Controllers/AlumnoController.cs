using api_RegistroDeportivo.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo.Controllers
{
    [ApiController]
    [Route("api-alumnos/alumno")]
    public class AlumnoController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public AlumnoController(ApplicationDBContext Context)
        {
            context = Context;
        }

        //cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Alumno>>> findAll()
        {
            return await context.Alumno.ToListAsync();

        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Alumno a)
        {
            //verificando la existencia del horario
            var horarioexiste = await context.Horarios.AnyAsync(x => x.codHorario == a.codHorario);
            var entrenadorexiste = await context.Entrenador.AnyAsync(x => x.codEntrenador == a.codEntrenador);
            var localexiste = await context.Locales.AnyAsync(x => x.codLocal == a.codLocal);

            if (!horarioexiste)
            {
                return BadRequest($"No existe el Horario con codigo :{a.codHorario}");
            }
            else if (!entrenadorexiste)
            {
                return BadRequest($"No existe el Entrenador con codigo :{a.codEntrenador}");
            }
            else if(!localexiste)
            {
                return BadRequest($"No existe el Local  con codigo :{a.codLocal}");
            }

            context.Add(a);
            await context.SaveChangesAsync();
            return BadRequest("Se Guardo correctamente");
        }

        //cuando queremos Buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Alumno>> findById(int id)
        {
            var alumno = await context.Alumno
                .FirstOrDefaultAsync(x => x.codAlumno == id);

            if (alumno == null)
            {
                return NotFound();
            }
            else
            {
                return alumno;
            }
        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Alumno a, int id)
        {
            if (a.codAlumno != id)
            {
                return BadRequest("No se encontro el DNI correspondiente");
            }
            context.Update(a);
            await context.SaveChangesAsync();
            return BadRequest("Se actualizo correctamente");
        }
        // Con ese lo borras en la base de datos
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
       {
       var existe = await context.Alumno.AnyAsync(x => x.codAlumno == id);
       if (!existe)
       {
           return NotFound();
       }
       context.Remove(new Alumno() { codAlumno = id });
       await context.SaveChangesAsync();
       return BadRequest("Se Borro correctamente");
       }
    }
}


