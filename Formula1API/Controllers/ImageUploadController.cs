namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("[controller]")]


public class ImageUploadController : ControllerBase
{

    private readonly IWebHostEnvironment environment;

public ImageUploadController(IWebHostEnvironment _environment)
{
    environment = _environment;
}

// Upload image 
[HttpPost]
public IActionResult PostImage(IFormFile formFile)
{
    try
    {
string webRootPath = environment.WebRootPath;
string absolutePath = Path.Combine($"{webRootPath}/images/{formFile.FileName}");

using(var fileStream = new FileStream(absolutePath, FileMode.Create))
{
formFile.CopyTo(fileStream);
}

return Ok();
    }
    catch 
    {
        return StatusCode(500);
    }
}




}
