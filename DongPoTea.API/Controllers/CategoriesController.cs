using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DongPoTea.Core.Interfaces;
using DongPoTea.API.Models.DTOs;
using Microsoft.EntityFrameworkCore;

namespace DongPoTea.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly ILogger<CategoriesController> _logger;

    public CategoriesController(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CategoriesController> logger)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<List<CategoryDto>>> GetCategories([FromQuery] string? lang = "en")
    {
        try
        {
            var categories = await _unitOfWork.Categories
                .ListAsync(c => c.IsActive && c.ParentCategoryId == null);

            var categoryDtos = new List<CategoryDto>();

            foreach (var category in categories)
            {
                var categoryDto = _mapper.Map<CategoryDto>(category);
                categoryDto.ProductCount = await _unitOfWork.Products
                    .CountAsync(p => p.CategoryId == category.Id && p.IsActive);
                categoryDtos.Add(categoryDto);
            }

            return Ok(new { data = categoryDtos });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving categories");
            return StatusCode(500, "An error occurred while retrieving categories");
        }
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<CategoryDto>> GetCategoryBySlug(string slug, [FromQuery] string? lang = "en")
    {
        try
        {
            var categories = await _unitOfWork.Categories
                .ListAsync(c => c.Slug == slug && c.IsActive);
            
            var category = categories.FirstOrDefault();

            if (category == null)
            {
                return NotFound("Category not found");
            }

            var categoryDto = _mapper.Map<CategoryDto>(category);
            categoryDto.ProductCount = await _unitOfWork.Products
                .CountAsync(p => p.CategoryId == category.Id && p.IsActive);

            return Ok(categoryDto);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving category {Slug}", slug);
            return StatusCode(500, "An error occurred while retrieving the category");
        }
    }
}