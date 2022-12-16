using api_RegistroDeportivo.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo.Controllers
{
    [ApiController]
    [Route("api-entrenadores/entrenador")]
    public class EntrenadorController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public EntrenadorController(ApplicationDBContext Context)
        {
            context = Context;
        }
        //cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Entrenador>>> findAll()
        {
            return await context.Entrenador.ToListAsync();

        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Entrenador a)
        {
            //verificando la existencia del alumno
            var alumnoexiste = await context.Horarios.AnyAsync(x => x.codHorario == a.codHorario);

            if (!alumnoexiste)
            {
                return BadRequest($"No existe el horario con ID : {a.codHorario}");
            }
            context.Add(a);
            await context.SaveChangesAsync();
            return BadRequest("Se Guardo correctamente");
        }

        //cuando queremos Buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Entrenador>> findById(int id)
        {
            var entrenador = await context.Entrenador
                .FirstOrDefaultAsync(x => x.codEntrenador == id);

            if (entrenador == null)
            {
                return NotFound();
            }
            else
            {
                return entrenador;
            }
        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Entrenador a, int id)
        {
            if (a.codEntrenador != id)
            {
                return BadRequest("No se encontro el cod correspondiente");
            }
            context.Update(a);
            await context.SaveChangesAsync();
            return BadRequest("Se actualizo correctamente");
        }
        // Con ese lo borras en la base de datos
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Entrenador.AnyAsync(x => x.codEntrenador == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Entrenador() { codEntrenador = id });
            await context.SaveChangesAsync();
            return BadRequest("Se Borro correctamente");
        }

    }
}
