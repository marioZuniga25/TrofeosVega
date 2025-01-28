using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrofeosVega.Migrations
{
    /// <inheritdoc />
    public partial class adicionFondoDeporte : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "imgFondo",
                table: "Deporte",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imgFondo",
                table: "Deporte");
        }
    }
}
