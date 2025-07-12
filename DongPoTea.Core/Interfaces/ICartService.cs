using DongPoTea.Core.Entities;

namespace DongPoTea.Core.Interfaces;

public interface ICartService
{
    Task<ShoppingCart> GetOrCreateCartAsync(string sessionId, Guid? customerId = null);
    Task<ShoppingCart> AddItemToCartAsync(string sessionId, Guid productId, int quantity);
    Task<ShoppingCart> UpdateCartItemQuantityAsync(string sessionId, Guid cartItemId, int quantity);
    Task<ShoppingCart> RemoveItemFromCartAsync(string sessionId, Guid cartItemId);
    Task ClearCartAsync(string sessionId);
    decimal CalculateSubtotal(ShoppingCart cart);
    decimal CalculateTax(decimal subtotal);
    decimal CalculateShipping(decimal subtotal);
    decimal CalculateTotal(ShoppingCart cart);
}