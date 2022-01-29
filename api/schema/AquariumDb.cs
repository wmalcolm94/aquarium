using Microsoft.EntityFrameworkCore;

internal class AquariumDb : DbContext 
{
    private readonly string _connectionString;

    public AquariumDb(
        DbContextOptions options
    ) : base(options) 
    {

    }

    public DbSet<Aquarium> Aquariums { get; set; }
}