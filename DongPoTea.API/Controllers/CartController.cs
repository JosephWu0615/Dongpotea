using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DongPoTea.Core.Interfaces;
using DongPoTea.API.Models.DTOs;

namespace DongPoTea.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly ICartService _cartService;
    private readonly IMapper _mapper;
    private readonly ILogger<CartController> _logger;

    public CartController(ICartService cartService, IMapper mapper, ILogger<CartController> logger)
    {
        _cartService = cartService;
        _mapper = mapper;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<CartDto>> GetCart([FromHeader(Name = "X-Session-Id")] string? sessionId)
    {
        try
        {
            if (string.IsNullOrEmpty(sessionId))
            {
                sessionId = Guid.NewGuid().ToString();
            }

            var cart = await _cartService.GetOrCreateCartAsync(sessionId);
            var cartDto = MapToCartDto(cart);

            return Ok(cartDto);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving cart");
            return StatusCode(500, "An error occurred while retrieving the cart");
        }
    }

    [HttpPost("items")]
    public async Task<ActionResult<CartDto>> AddToCart(
        [FromHeader(Name = "X-Session-Id")] string? sessionId,
        [FromBody] AddToCartRequest request)
    {
        try
        {
            if (string.IsNullOrEmpty(sessionId))
            {
                sessionId = Guid.NewGuid().ToString();
            }

            if (request.Quantity <= 0)
            {
                return BadRequest("Quantity must be greater than 0");
            }

            var cart = await _cartService.AddItemToCartAsync(sessionId, request.ProductId, request.Quantity);
            var cartDto = MapToCartDto(cart);

            Response.Headers["X-Session-Id"] = sessionId;
            return Ok(cartDto);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error adding item to cart");
            return StatusCode(500, "An error occurred while adding the item to cart");
        }
    }

    [HttpPut("items/{itemId}")]
    public async Task<ActionResult<CartDto>> UpdateCartItem(
        [FromHeader(Name = "X-Session-Id")] string sessionId,
        Guid itemId,
        [FromBody] UpdateCartItemRequest request)
    {
        try
        {
            if (string.IsNullOrEmpty(sessionId))
            {
                return BadRequest("Session ID is required");
            }

            var cart = await _cartService.UpdateCartItemQuantityAsync(sessionId, itemId, request.Quantity);
            var cartDto = MapToCartDto(cart);

            return Ok(cartDto);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating cart item");
            return StatusCode(500, "An error occurred while updating the cart item");
        }
    }

    [HttpDelete("items/{itemId}")]
    public async Task<ActionResult<CartDto>> RemoveFromCart(
        [FromHeader(Name = "X-Session-Id")] string sessionId,
        Guid itemId)
    {
        try
        {
            if (string.IsNullOrEmpty(sessionId))
            {
                return BadRequest("Session ID is required");
            }

            var cart = await _cartService.RemoveItemFromCartAsync(sessionId, itemId);
            var cartDto = MapToCartDto(cart);

            return Ok(cartDto);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error removing item from cart");
            return StatusCode(500, "An error occurred while removing the item from cart");
        }
    }

    [HttpDelete]
    public async Task<ActionResult> ClearCart([FromHeader(Name = "X-Session-Id")] string sessionId)
    {
        try
        {
            if (string.IsNullOrEmpty(sessionId))
            {
                return BadRequest("Session ID is required");
            }

            await _cartService.ClearCartAsync(sessionId);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error clearing cart");
            return StatusCode(500, "An error occurred while clearing the cart");
        }
    }

    private CartDto MapToCartDto(Core.Entities.ShoppingCart cart)
    {
        var subtotal = _cartService.CalculateSubtotal(cart);
        var tax = _cartService.CalculateTax(subtotal);
        var shipping = _cartService.CalculateShipping(subtotal);
        var total = subtotal + tax + shipping;

        var cartDto = new CartDto
        {
            Id = cart.Id,
            Subtotal = subtotal,
            EstimatedTax = tax,
            EstimatedShipping = shipping,
            Total = total,
            Items = cart.CartItems.Select(ci => new CartItemDto
            {
                Id = ci.Id,
                Quantity = ci.Quantity,
                Subtotal = ci.Product.Price * ci.Quantity,
                Product = new ProductCartDto
                {
                    Id = ci.Product.Id,
                    Name = ci.Product.Name,
                    Price = ci.Product.Price,
                    StockQuantity = ci.Product.StockQuantity,
                    PrimaryImage = ci.Product.Images
                        .Where(i => i.IsPrimary)
                        .Select(i => new ProductImageDto
                        {
                            Id = i.Id,
                            Url = i.ImageUrl,
                            AltText = i.AltText,
                            IsPrimary = i.IsPrimary
                        })
                        .FirstOrDefault()
                }
            }).ToList()
        };

        return cartDto;
    }
}