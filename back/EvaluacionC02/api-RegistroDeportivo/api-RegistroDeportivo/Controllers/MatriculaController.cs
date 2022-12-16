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
    [Route("api-alumnos/matricula")]
    public class MatriculaController: ControllerBase
    {
        private readonly ApplicationDBContext context;

        public MatriculaController(ApplicationDBContext context)
        {           
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Matricula>>> findAll()
        {
            return await context.Matricula.ToListAsync();

        }

        [HttpPost]
        public async Task<ActionResult> add(Matricula m)
        {
            //verificando la existencia del alumno
            var alumnoexiste = await context.Alumno.AnyAsync(x => x.codAlumno == m.codAlumno);

            if (!alumnoexiste)
            {
                return BadRequest($"No existe el alumno con Dni {m.codAlumno}");
            }
            context.Add(m);
            await context.SaveChangesAsync();
            return BadRequest("Se Guardo correctamente");
        }

        //#BUSCAR Matricula
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Matricula>> findById(int id)
        {
            var matricula = await context.Matricula
                .FirstOrDefaultAsync(x => x.codmatricula == id);


            if (matricula == null)
            {
                return NotFound();
            }
            else
            {
                return matricula;
            }

        }

        //Actualizar
        [HttpPut("{id:int}")]

        public async Task<ActionResult> update(Matricula m, int id)
        {
            if (m.codmatricula != id)
            {
                return BadRequest("No se encuentro el codigo correspondiente");
            }

            context.Update(m);
            await context.SaveChangesAsync();
            return BadRequest("Se actualizo correctamente");
        }

        //Delete
        [HttpDelete("{id:int}")]

        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Matricula.AnyAsync(x => x.codmatricula == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Matricula() { codmatricula = id });
            await context.SaveChangesAsync();
            return BadRequest("Se Borro correctamente");
        }
    }
}

