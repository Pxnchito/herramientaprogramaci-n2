using Microsoft.EntityFrameworkCore.Migrations;

namespace api_RegistroDeportivo.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Horarios",
                columns: table => new
                {
                    codHorario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    turno = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Horarios", x => x.codHorario);
                });

            migrationBuilder.CreateTable(
                name: "Locales",
                columns: table => new
                {
                    codLocal = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    direccion = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locales", x => x.codLocal);
                });

            migrationBuilder.CreateTable(
                name: "Entrenador",
                columns: table => new
                {
                    codEntrenador = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dni = table.Column<int>(type: "int", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    correo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefono = table.Column<int>(type: "int", nullable: false),
                    codHorario = table.Column<int>(type: "int", nullable: false),
                    horarioscodHorario = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrenador", x => x.codEntrenador);
                    table.ForeignKey(
                        name: "FK_Entrenador_Horarios_horarioscodHorario",
                        column: x => x.horarioscodHorario,
                        principalTable: "Horarios",
                        principalColumn: "codHorario",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Alumno",
                columns: table => new
                {
                    codAlumno = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dni = table.Column<int>(type: "int", maxLength: 8, nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    direccion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fchNacimento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    correo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nomapeApo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dniApo = table.Column<int>(type: "int", nullable: false),
                    telfApo = table.Column<int>(type: "int", nullable: false),
                    codEntrenador = table.Column<int>(type: "int", nullable: false),
                    entrenadorcodEntrenador = table.Column<int>(type: "int", nullable: true),
                    codHorario = table.Column<int>(type: "int", nullable: false),
                    horarioscodHorario = table.Column<int>(type: "int", nullable: true),
                    codLocal = table.Column<int>(type: "int", nullable: false),
                    localescodLocal = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alumno", x => x.codAlumno);
                    table.ForeignKey(
                        name: "FK_Alumno_Entrenador_entrenadorcodEntrenador",
                        column: x => x.entrenadorcodEntrenador,
                        principalTable: "Entrenador",
                        principalColumn: "codEntrenador",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Alumno_Horarios_horarioscodHorario",
                        column: x => x.horarioscodHorario,
                        principalTable: "Horarios",
                        principalColumn: "codHorario",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Alumno_Locales_localescodLocal",
                        column: x => x.localescodLocal,
                        principalTable: "Locales",
                        principalColumn: "codLocal",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Matricula",
                columns: table => new
                {
                    codmatricula = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    direccion = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    codAlumno = table.Column<int>(type: "int", nullable: false),
                    alumnocodAlumno = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matricula", x => x.codmatricula);
                    table.ForeignKey(
                        name: "FK_Matricula_Alumno_alumnocodAlumno",
                        column: x => x.alumnocodAlumno,
                        principalTable: "Alumno",
                        principalColumn: "codAlumno",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Alumno_entrenadorcodEntrenador",
                table: "Alumno",
                column: "entrenadorcodEntrenador");

            migrationBuilder.CreateIndex(
                name: "IX_Alumno_horarioscodHorario",
                table: "Alumno",
                column: "horarioscodHorario");

            migrationBuilder.CreateIndex(
                name: "IX_Alumno_localescodLocal",
                table: "Alumno",
                column: "localescodLocal");

            migrationBuilder.CreateIndex(
                name: "IX_Entrenador_horarioscodHorario",
                table: "Entrenador",
                column: "horarioscodHorario");

            migrationBuilder.CreateIndex(
                name: "IX_Matricula_alumnocodAlumno",
                table: "Matricula",
                column: "alumnocodAlumno");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Matricula");

            migrationBuilder.DropTable(
                name: "Alumno");

            migrationBuilder.DropTable(
                name: "Entrenador");

            migrationBuilder.DropTable(
                name: "Locales");

            migrationBuilder.DropTable(
                name: "Horarios");
        }
    }
}
