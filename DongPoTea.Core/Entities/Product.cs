namespace DongPoTea.Core.Entities;

public class Product : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string? NameChinese { get; set; }
    public string? Description { get; set; }
    public string? DescriptionChinese { get; set; }
    public string SKU { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public Guid CategoryId { get; set; }
    public int StockQuantity { get; set; } = 0;
    public decimal? Weight { get; set; }
    public bool IsActive { get; set; } = true;
    
    public Category Category { get; set; } = null!;
    public ICollection<ProductImage> Images { get; set; } = new List<ProductImage>();
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
}