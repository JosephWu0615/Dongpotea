using Microsoft.EntityFrameworkCore;
using DongPoTea.Core.Entities;
using DongPoTea.Core.Interfaces;
using DongPoTea.Data.Contexts;

namespace DongPoTea.Infrastructure.Services;

public class CartService : ICartService
{
    private readonly ApplicationDbContext _context;
    private readonly IUnitOfWork _unitOfWork;
    private const decimal TAX_RATE = 0.08m; // 8% tax
    private const decimal FREE_SHIPPING_THRESHOLD = 50m;
    private const decimal SHIPPING_COST = 5m;

    public CartService(ApplicationDbContext context, IUnitOfWork unitOfWork)
    {
        _context = context;
        _unitOfWork = unitOfWork;
    }

    public async Task<ShoppingCart> GetOrCreateCartAsync(string sessionId, Guid? customerId = null)
    {
        var cart = await _context.ShoppingCarts
            .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                    .ThenInclude(p => p.Images)
            .FirstOrDefaultAsync(c => c.SessionId == sessionId);

        if (cart == null)
        {
            cart = new ShoppingCart
            {
                SessionId = sessionId,
                CustomerId = customerId,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };
            
            await _context.ShoppingCarts.AddAsync(cart);
            await _context.SaveChangesAsync();
        }
        else if (customerId.HasValue && cart.CustomerId != customerId)
        {
            cart.CustomerId = customerId;
            await _context.SaveChangesAsync();
        }

        return cart;
    }

    public async Task<ShoppingCart> AddItemToCartAsync(string sessionId, Guid productId, int quantity)
    {
        var cart = await GetOrCreateCartAsync(sessionId);
        var product = await _context.Products.FindAsync(productId);

        if (product == null || !product.IsActive)
        {
            throw new InvalidOperationException("Product not found or inactive");
        }

        if (product.StockQuantity < quantity)
        {
            throw new InvalidOperationException("Insufficient stock");
        }

        var existingItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);

        if (existingItem != null)
        {
            existingItem.Quantity += quantity;
            existingItem.UpdatedAt = DateTime.UtcNow;
        }
        else
        {
            var cartItem = new CartItem
            {
                CartId = cart.Id,
                ProductId = productId,
                Quantity = quantity,
                AddedAt = DateTime.UtcNow
            };
            
            cart.CartItems.Add(cartItem);
        }

        cart.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return await GetOrCreateCartAsync(sessionId);
    }

    public async Task<ShoppingCart> UpdateCartItemQuantityAsync(string sessionId, Guid cartItemId, int quantity)
    {
        var cart = await GetOrCreateCartAsync(sessionId);
        var cartItem = cart.CartItems.FirstOrDefault(ci => ci.Id == cartItemId);

        if (cartItem == null)
        {
            throw new InvalidOperationException("Cart item not found");
        }

        if (quantity <= 0)
        {
            cart.CartItems.Remove(cartItem);
        }
        else
        {
            var product = await _context.Products.FindAsync(cartItem.ProductId);
            if (product == null || product.StockQuantity < quantity)
            {
                throw new InvalidOperationException("Insufficient stock");
            }

            cartItem.Quantity = quantity;
            cartItem.UpdatedAt = DateTime.UtcNow;
        }

        cart.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return await GetOrCreateCartAsync(sessionId);
    }

    public async Task<ShoppingCart> RemoveItemFromCartAsync(string sessionId, Guid cartItemId)
    {
        var cart = await GetOrCreateCartAsync(sessionId);
        var cartItem = cart.CartItems.FirstOrDefault(ci => ci.Id == cartItemId);

        if (cartItem != null)
        {
            cart.CartItems.Remove(cartItem);
            cart.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        return await GetOrCreateCartAsync(sessionId);
    }

    public async Task ClearCartAsync(string sessionId)
    {
        var cart = await GetOrCreateCartAsync(sessionId);
        _context.CartItems.RemoveRange(cart.CartItems);
        cart.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();
    }

    public decimal CalculateSubtotal(ShoppingCart cart)
    {
        return cart.CartItems.Sum(ci => ci.Product.Price * ci.Quantity);
    }

    public decimal CalculateTax(decimal subtotal)
    {
        return Math.Round(subtotal * TAX_RATE, 2);
    }

    public decimal CalculateShipping(decimal subtotal)
    {
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    }

    public decimal CalculateTotal(ShoppingCart cart)
    {
        var subtotal = CalculateSubtotal(cart);
        var tax = CalculateTax(subtotal);
        var shipping = CalculateShipping(subtotal);
        return subtotal + tax + shipping;
    }
}