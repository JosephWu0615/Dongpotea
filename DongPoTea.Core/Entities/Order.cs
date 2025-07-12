namespace DongPoTea.Core.Entities;

public class Order : BaseEntity
{
    public string OrderNumber { get; set; } = string.Empty;
    public Guid? CustomerId { get; set; }
    public string CustomerEmail { get; set; } = string.Empty;
    public decimal SubTotal { get; set; }
    public decimal Tax { get; set; } = 0;
    public decimal ShippingCost { get; set; } = 0;
    public decimal Total { get; set; }
    public string Currency { get; set; } = "USD";
    public string Status { get; set; } = "Pending";
    public string PaymentStatus { get; set; } = "Pending";
    public string? PaymentMethod { get; set; }
    public string? StripePaymentIntentId { get; set; }
    public string? ShippingAddressJson { get; set; }
    public string? BillingAddressJson { get; set; }
    public string? Notes { get; set; }
    
    public Customer? Customer { get; set; }
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}