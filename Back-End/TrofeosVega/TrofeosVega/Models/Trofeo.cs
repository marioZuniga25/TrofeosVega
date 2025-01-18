using TrofeosVega;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
namespace TrofeosVega.Models
{
    public class Trofeo
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public double precioU { get; set; }
        public double precioMay { get; set; }
        public string descripcion { get; set; }
        public int pzsMayoreo { get; set; }
        public string img { get; set; }
        
    }


}
