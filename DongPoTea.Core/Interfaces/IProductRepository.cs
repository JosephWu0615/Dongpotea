using DongPoTea.Core.Entities;

namespace DongPoTea.Core.Interfaces;

public interface IProductRepository : IRepository<Product>
{
    Task<Product?> GetByIdWithImagesAsync(Guid id);
    Task<IReadOnlyList<Product>> GetProductsByCategoryAsync(Guid categoryId);
    Task<IReadOnlyList<Product>> GetActiveProductsAsync(int skip, int take, string? search = null, Guid? categoryId = null);
    Task<int> GetActiveProductsCountAsync(string? search = null, Guid? categoryId = null);
    Task<IReadOnlyList<Product>> GetRelatedProductsAsync(Guid productId, int count = 4);
}