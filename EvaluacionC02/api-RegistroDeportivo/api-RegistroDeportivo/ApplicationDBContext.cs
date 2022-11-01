using api_RegistroDeportivo.Entitys;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_RegistroDeportivo
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Alumno> Alumno { get; set; }

        public DbSet<Matricula> Matricula { get; set;}
    }
}

