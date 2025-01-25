using Microsoft.EntityFrameworkCore;
using TrofeosVega.Models;

namespace TrofeosVega
{
    public class TrofeosContext : DbContext
    {
        public TrofeosContext(DbContextOptions<TrofeosContext> options):base(options)
        {
        }

        public DbSet<Trofeo> Trofeos { get; set; }
        public DbSet<Deporte> Deportes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Trofeo>(trofeo=>
            {
                trofeo.ToTable("Trofeo");
                trofeo.HasKey(t => t.id);
                trofeo.Property(t => t.id).ValueGeneratedOnAdd().UseIdentityColumn();
                trofeo.Property(t => t.nombre).IsRequired();
                trofeo.Property(t => t.descripcion).IsRequired();
                trofeo.Property(t => t.precioU).IsRequired();
                trofeo.Property(t => t.precioMay).IsRequired();
                trofeo.Property(t => t.pzsMayoreo).IsRequired();
                trofeo.Property(t => t.img).IsRequired();

            });


            modelBuilder.Entity<Deporte>(deporte =>
            {
                deporte.ToTable("Deporte");
                deporte.HasKey(t => t.id);
                deporte.Property(t => t.id).ValueGeneratedOnAdd().UseIdentityColumn();
                deporte.Property(t => t.nombre).IsRequired();
                deporte.Property(t => t.descripcion).IsRequired();
                deporte.Property(t => t.img).IsRequired();

            });
        }

    }
}
