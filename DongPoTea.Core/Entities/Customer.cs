namespace DongPoTea.Core.Entities;

public class Customer : BaseEntity
{
    public string Email { get; set; } = string.Empty;
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Phone { get; set; }
    public string PreferredLanguage { get; set; } = "en";
    public bool IsEmailVerified { get; set; } = false;
    
    public ICollection<Order> Orders { get; set; } = new List<Order>();
    public ICollection<ShoppingCart> ShoppingCarts { get; set; } = new List<ShoppingCart>();
}