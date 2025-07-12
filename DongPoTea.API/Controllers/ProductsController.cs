using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DongPoTea.Core.Interfaces;
using DongPoTea.API.Models;
using DongPoTea.API.Models.DTOs;

namespace DongPoTea.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly ILogger<ProductsController> _logger;

    public ProductsController(IUnitOfWork unitOfWork, IMapper mapper, ILogger<ProductsController> logger)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<PaginatedResponse<ProductListDto>>> GetProducts(
        [FromQuery] PaginationParams paginationParams,
        [FromQuery] string? category = null,
        [FromQuery] string? lang = "en")
    {
        try
        {
            Guid? categoryId = null;
            if (!string.IsNullOrEmpty(category))
            {
                var categoryEntity = await _unitOfWork.Categories
                    .ListAsync(c => c.Slug == category);
                categoryId = categoryEntity.FirstOrDefault()?.Id;
            }

            var skip = (paginationParams.Page - 1) * paginationParams.PageSize;
            var products = await _unitOfWork.Products.GetActiveProductsAsync(
                skip, 
                paginationParams.PageSize, 
                paginationParams.Search,
                categoryId);
            
            var totalItems = await _unitOfWork.Products.GetActiveProductsCountAsync(
                paginationParams.Search,
                categoryId);

            var productDtos = _mapper.Map<List<ProductListDto>>(products);

            var response = new PaginatedResponse<ProductListDto>
            {
                Data = productDtos,
                Pagination = new PaginationInfo
                {
                    CurrentPage = paginationParams.Page,
                    PageSize = paginationParams.PageSize,
                    TotalItems = totalItems,
                    TotalPages = (int)Math.Ceiling(totalItems / (double)paginationParams.PageSize)
                }
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving products");
            return StatusCode(500, "An error occurred while retrieving products");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> GetProduct(Guid id, [FromQuery] string? lang = "en")
    {
        try
        {
            var product = await _unitOfWork.Products.GetByIdWithImagesAsync(id);
            
            if (product == null || !product.IsActive)
            {
                return NotFound("Product not found");
            }

            var productDto = _mapper.Map<ProductDto>(product);

            // Get related products
            var relatedProducts = await _unitOfWork.Products.GetRelatedProductsAsync(id);
            productDto.Images = productDto.Images.OrderBy(i => i.IsPrimary ? 0 : 1).ToList();

            return Ok(productDto);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving product {ProductId}", id);
            return StatusCode(500, "An error occurred while retrieving the product");
        }
    }

    [HttpGet("{id}/related")]
    public async Task<ActionResult<List<ProductListDto>>> GetRelatedProducts(Guid id, [FromQuery] int count = 4)
    {
        try
        {
            var products = await _unitOfWork.Products.GetRelatedProductsAsync(id, count);
            var productDtos = _mapper.Map<List<ProductListDto>>(products);
            return Ok(productDtos);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving related products for {ProductId}", id);
            return StatusCode(500, "An error occurred while retrieving related products");
        }
    }
}