namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;


[ApiController]
[Route("[controller]")]
public class DriversController : ControllerBase
{

private readonly Formula1Context formula1Context;

public DriversController(Formula1Context _formula1Context)
{
    formula1Context = _formula1Context;
}

//Get all drivers
[HttpGet]

public async Task<ActionResult<List<Driver> > >Get()
{
    try 
    {
        List<Driver> drivers = await formula1Context.Drivers.ToListAsync();
        if(drivers != null)
        {
            return Ok(drivers);
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

        //Get by id
        [HttpGet("{id}")]
       public async Task<ActionResult <Driver> > Get(int id)
       {
        Driver? driver = await formula1Context.Drivers.FindAsync(id);
        if(driver != null)
        {
            return Ok(driver);
        }
        else 
        {
            return NotFound();
        }
       }

      //Update driver
      [HttpPut]
    public async Task<IActionResult> Put(Driver updatedDrivers)
    {
        try
        {
            formula1Context.Entry(updatedDrivers).State = EntityState.Modified;
            await formula1Context.SaveChangesAsync();
            return NoContent();
        }
        catch 
        {
            return StatusCode(500);
        }
    }
        

//Delete driver by id
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    Driver? driver = await formula1Context.Drivers.FindAsync(id);
    if(driver != null)
    {
        formula1Context.Drivers.Remove(driver);
        await formula1Context.SaveChangesAsync();  
    }
    return NoContent();
}

//Add new driver
[HttpPost]
public IActionResult Post(Driver newDrivers)
{
    try { 
formula1Context.Drivers.Add(newDrivers);
formula1Context.SaveChanges();
return Ok();
    }
    catch
    {
    return StatusCode(500);
    }
}
}

