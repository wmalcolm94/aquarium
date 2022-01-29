using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Aquarium")]
internal record Aquarium 
{
    [Key]
    public int id { get; set; }
    public string size { get; set; } = string.Empty;
    public string description { get; set; } = string.Empty;
}