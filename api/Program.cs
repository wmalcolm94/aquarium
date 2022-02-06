using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration["ConnectionString"] ?? "Server=database;Database=AquariumDatabase;User Id=sa;Password=f+r=H+by123;";
if (string.IsNullOrEmpty(connectionString))
{
    throw new ArgumentNullException("ConnectionString", "Must provide a connection string for the sql database");
}

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<AquariumDb>(options => options.UseSqlServer(connectionString));
builder.Services.AddSwaggerGen(c => {
    c.SwaggerDoc("v1", new OpenApiInfo {
        Title = "Aquarium API",
        Description = "Helping you track and maintain your aquariums",
        Version = "v1"
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options => {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

app.MapGet("/aquariums", async (AquariumDb db) => await db.Aquariums.ToListAsync());

app.MapGet("/aquariums/{id}", async (AquariumDb db, int id) => {
    var aquarium = await db.Aquariums.FindAsync(id);
    return Results.Ok(aquarium);
});

app.MapPost("/aquariums", async (AquariumDb db, Aquarium aquarium) =>
{
    await db.Aquariums.AddAsync(aquarium);
    await db.SaveChangesAsync();
    return Results.Created($"/aquariums/${aquarium.id}", aquarium);
});

app.MapPut("/aquarium/{id}", async (AquariumDb db, Aquarium updateAquarium,int id) => 
{
    var aquarium = await db.Aquariums.FindAsync(id);
    if (aquarium is null) {
        return Results.NotFound();
    }
    
    aquarium.description = updateAquarium.description;
    aquarium.size = updateAquarium.size;
    
    await db.SaveChangesAsync();
    
    return Results.NoContent();
});

app.MapDelete("/aquarium/{id}", async (AquariumDb db, int id) => 
{
    var aquarium = await db.Aquariums.FindAsync(id);
    if (aquarium is null) {
        return Results.NotFound();
    }

    db.Remove(aquarium);
    await db.SaveChangesAsync();

    return Results.Ok();
});

app.Run();