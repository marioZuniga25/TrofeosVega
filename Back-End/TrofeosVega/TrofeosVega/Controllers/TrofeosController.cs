using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrofeosVega;
using TrofeosVega.Models;

namespace TrofeosVega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrofeosController : ControllerBase
    {
        private readonly TrofeosContext _context;

        public TrofeosController(TrofeosContext context)
        {
            _context = context;
        }

        // GET: api/Trofeos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trofeo>>> GetTrofeos()
        {
            return await _context.Trofeos.ToListAsync();
        }

        // GET: api/Trofeos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Trofeo>> GetTrofeo(int id)
        {
            var trofeo = await _context.Trofeos.FindAsync(id);

            if (trofeo == null)
            {
                return NotFound();
            }

            return trofeo;
        }

        // PUT: api/Trofeos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrofeo(int id, Trofeo trofeo)
        {
            if (id != trofeo.id)
            {
                return BadRequest();
            }

            _context.Entry(trofeo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrofeoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Trofeos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Trofeo>> PostTrofeo([FromBody] Trofeo trofeo)
        {
            if (trofeo == null)
            {
                return BadRequest("El trofeo no puede ser nulo.");
            }

            _context.Trofeos.Add(trofeo);
            await _context.SaveChangesAsync();

            // Puedes devolver un objeto con el trofeo creado y un mensaje de éxito.
            return Ok(new { mensaje = "Trofeo creado exitosamente", trofeo });
        }


        // DELETE: api/Trofeos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrofeo(int id)
        {
            var trofeo = await _context.Trofeos.FindAsync(id);
            if (trofeo == null)
            {
                return NotFound();
            }

            _context.Trofeos.Remove(trofeo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrofeoExists(int id)
        {
            return _context.Trofeos.Any(e => e.id == id);
        }
    }
}
