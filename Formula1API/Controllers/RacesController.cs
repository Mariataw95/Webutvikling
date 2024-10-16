namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;

[ApiController]
[Route("[controller]")]
public class RacesController : ControllerBase
{
    private readonly Formula1Context formula1Context;

public RacesController(Formula1Context _formula1Context)
{
    formula1Context = _formula1Context;
}

//Get all races
[HttpGet]
public async Task<ActionResult<List<Race> > >Get()
{
    try 
    {
        List<Race> races = await formula1Context.Races.ToListAsync();
        if(races != null)
        {
            return Ok(races);
        }
        else 
        {
return NotFound();
        }
    }
        
        catch 
        {
            return StatusCode(500);
        }
        } 
}

