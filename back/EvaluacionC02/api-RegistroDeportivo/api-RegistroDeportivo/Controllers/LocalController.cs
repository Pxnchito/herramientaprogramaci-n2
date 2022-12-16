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
    [Route("api-locales/local")]
    public class LocalController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public LocalController(ApplicationDBContext Context)
        {
            context = Context;
        }

        //cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Locales>>> findAll()
        {
            return await context.Locales.ToListAsync();

        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Locales a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return BadRequest("Se Guardo correctamente");
        }

        //cuando queremos Buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Locales>> findById(int id)
        {
            var local = await context.Locales
                .FirstOrDefaultAsync(x => x.codLocal == id);

            if (local == null)
            {
                return NotFound();
            }
            else
            {
                return local;
            }
        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Locales a, int id)
        {
            if (a.codLocal != id)
            {
                return BadRequest("No se encontro el id correspondiente");
            }
            context.Update(a);
            await context.SaveChangesAsync();
            return BadRequest("Se actualizo correctamente");
        }
        // Con ese lo borras en la base de datos
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Locales.AnyAsync(x => x.codLocal == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Locales() { codLocal = id });
            await context.SaveChangesAsync();
            return BadRequest("Se Borro correctamente");
        }
    }
}
