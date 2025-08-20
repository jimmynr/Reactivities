namespace Domain;

public class Activity
{
    /// <summary>
    /// If a property is named Id, by convention EF will consider it as the primary key.
    /// Otherwise, add the [Key] data annotation to the property that you want to tell EF is the primary key of the table.
    /// GUID (Globally Unique Identifier)
    /// </summary>
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; }
    public DateTime Date { get; set; }
    public required string Description { get; set; }
    public required string Category { get; set; }
    public bool IsCancelled { get; set; }

    // location props
    public required string City { get; set; }
    public required string Venue { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}
