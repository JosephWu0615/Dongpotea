namespace DongPoTea.Core.Entities;

public class CartItem : BaseEntity
{
    public Guid CartId { get; set; }
    public Guid ProductId { get; set; }
    public int Quantity { get; set; }
    public DateTime AddedAt { get; set; } = DateTime.UtcNow;
    
    public ShoppingCart Cart { get; set; } = null!;
    public Product Product { get; set; } = null!;
}