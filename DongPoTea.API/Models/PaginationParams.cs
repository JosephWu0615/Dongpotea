namespace DongPoTea.API.Models;

public class PaginationParams
{
    private const int MaxPageSize = 50;
    private int _pageSize = 12;
    
    public int Page { get; set; } = 1;
    
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = value > MaxPageSize ? MaxPageSize : value;
    }
    
    public string? Search { get; set; }
    public string? SortBy { get; set; }
    public string? SortOrder { get; set; } = "asc";
}