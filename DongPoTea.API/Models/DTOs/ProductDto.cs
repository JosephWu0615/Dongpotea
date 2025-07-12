namespace DongPoTea.API.Models.DTOs;

public class ProductDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? NameChinese { get; set; }
    public string? Description { get; set; }
    public string? DescriptionChinese { get; set; }
    public string SKU { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public decimal? Weight { get; set; }
    public bool InStock => StockQuantity > 0;
    public CategoryDto? Category { get; set; }
    public ProductImageDto? PrimaryImage { get; set; }
    public List<ProductImageDto> Images { get; set; } = new();
}

public class ProductListDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public bool InStock { get; set; }
    public CategoryDto? Category { get; set; }
    public ProductImageDto? PrimaryImage { get; set; }
}

public class CategoryDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? NameChinese { get; set; }
    public string Slug { get; set; } = string.Empty;
    public int ProductCount { get; set; }
}

public class ProductImageDto
{
    public Guid Id { get; set; }
    public string Url { get; set; } = string.Empty;
    public string? AltText { get; set; }
    public bool IsPrimary { get; set; }
}