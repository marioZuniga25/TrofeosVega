using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrofeosVega.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trofeo",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    precioU = table.Column<double>(type: "float", nullable: false),
                    precioMay = table.Column<double>(type: "float", nullable: false),
                    descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pzsMayoreo = table.Column<int>(type: "int", nullable: false),
                    img = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trofeo", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trofeo");
        }
    }
}
