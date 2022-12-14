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
    [Route("api-horaios/horario")]
    public class HorarioController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        public HorarioController(ApplicationDBContext Context)
        {
            context = Context;
        }
        //cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Horarios>>> findAll()
        {
            return await context.Horarios.ToListAsync();

        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Horarios a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return BadRequest("Se Guardo correctamente");
        }

        //cuando queremos Buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Horarios>> findById(int id)
        {
            var horario = await context.Horarios
                .FirstOrDefaultAsync(x => x.codHorario == id);
            if (horario == null)
            {
                return NotFound();
            }
            else
            {
                return horario;
            }

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Horarios a, int id)
        {
            if (a.codHorario != id)
            {
                return BadRequest("No se encontro el ID correspondiente");
            }
            context.Update(a);
            await context.SaveChangesAsync();
            return BadRequest("Se actualizo correctamente");
        }
        // Con ese lo borras en la base de datos
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Horarios.AnyAsync(x => x.codHorario == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Horarios() { codHorario = id });
            await context.SaveChangesAsync();
            return BadRequest("Se Borro correctamente");
        }
    }
}
