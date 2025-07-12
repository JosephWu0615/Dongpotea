namespace DongPoTea.API.Models.DTOs;

public class CartDto
{
    public Guid Id { get; set; }
    public List<CartItemDto> Items { get; set; } = new();
    public decimal Subtotal { get; set; }
    public decimal EstimatedTax { get; set; }
    public decimal EstimatedShipping { get; set; }
    public decimal Total { get; set; }
}

public class CartItemDto
{
    public Guid Id { get; set; }
    public ProductCartDto Product { get; set; } = null!;
    public int Quantity { get; set; }
    public decimal Subtotal { get; set; }
}

public class ProductCartDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public ProductImageDto? PrimaryImage { get; set; }
    public int StockQuantity { get; set; }
}

public class AddToCartRequest
{
    public Guid ProductId { get; set; }
    public int Quantity { get; set; } = 1;
}

public class UpdateCartItemRequest
{
    public int Quantity { get; set; }
}