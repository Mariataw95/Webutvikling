using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<Formula1Context>(
options => options.UseSqlite("Data Source=Databases/DriverDb.db")
);


builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
        policies => policies
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .AllowAnyHeader()
        );

    }
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseStaticFiles();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
