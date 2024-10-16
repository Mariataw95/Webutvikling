namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;

[ApiController]
[Route("[controller]")]
public class TeamsController : ControllerBase
{
    private readonly Formula1Context formula1Context;

    public TeamsController(Formula1Context _formula1Context)
    {
        formula1Context = _formula1Context;
    }

    // Get all teams
    [HttpGet]
    public async Task<ActionResult<List<Team>>> GetAllTeams()
    {
        try
        {
            List<Team> teams = await formula1Context.Teams.ToListAsync();
            
            if (teams != null && teams.Any())
            {
                return Ok(teams);
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


    // Get by manufacturer 
    [HttpGet("{manufacturer}")]
    public async Task<ActionResult<Team>> GetTeamByManufacturer(string manufacturer)
    {
        try{
        Team? team = await formula1Context.Teams.FirstOrDefaultAsync (team => team.Manufacturer == manufacturer);
        if (team != null)
        {
            return Ok(team);
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
