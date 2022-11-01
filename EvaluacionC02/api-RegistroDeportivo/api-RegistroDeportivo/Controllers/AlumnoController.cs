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

        [HttpGet]
        public async Task<ActionResult<List<Alumno>>> findAll()
        {
            return await context.Alumno.ToListAsync();

        }

        [HttpPost]

        public async Task<ActionResult> add(Alumno a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }
        
        //#BUSCAR ALUMNO
        [HttpGet("{dni:int}")]
        public async Task<ActionResult<Alumno>> findById(int dni)
        {
            var alumno = await context.Alumno
                .FirstOrDefaultAsync(x => x.dni == dni);

            return alumno;

        }

        [HttpPut("{dni:int}")]

        public async Task<ActionResult> update(Alumno a, int dni)
        {
            if(a.dni != dni)
            {
                return BadRequest("No se encuentro el Alumno");
            }

            context.Update(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Delete
        [HttpDelete("{dni:int}")]
 
        public async Task<ActionResult> delete(int dni)
        {
            var existe = await context.Alumno.AnyAsync(x => x.dni == dni);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Alumno() { dni = dni });
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}


