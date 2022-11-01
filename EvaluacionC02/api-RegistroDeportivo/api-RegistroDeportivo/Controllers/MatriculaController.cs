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
            var alumnoexiste = await context.Alumno.AnyAsync(x => x.dni == m.dni);

            if (!alumnoexiste)
            {
                return BadRequest($"No existe el alumno con Dni {m.dni}");
            }
            context.Add(m);
            await context.SaveChangesAsync();
            return Ok();
        }

        //#BUSCAR Matricula
        [HttpGet("{dni:int}")]
        public async Task<ActionResult<Matricula>> findById(int dni)
        {
            var matricula = await context.Matricula
                .FirstOrDefaultAsync(x => x.codigo == dni);

            return matricula;

        }

        //Actualizar
        [HttpPut("{dni:int}")]

        public async Task<ActionResult> update(Matricula m, int dni)
        {
            if (m.codigo != dni)
            {
                return BadRequest("No se encuentro el codigo correspondiente");
            }

            context.Update(m);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Delete
        [HttpDelete("{dni:int}")]

        public async Task<ActionResult> delete(int dni)
        {
            var existe = await context.Matricula.AnyAsync(x => x.codigo == dni);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Matricula() { codigo = dni });
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}

