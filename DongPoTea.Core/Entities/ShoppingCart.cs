namespace DongPoTea.Core.Entities;

public class ShoppingCart : BaseEntity
{
    public string SessionId { get; set; } = string.Empty;
    public Guid? CustomerId { get; set; }
    public DateTime ExpiresAt { get; set; }
    
    public Customer? Customer { get; set; }
    public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
}