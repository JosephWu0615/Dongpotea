using Microsoft.EntityFrameworkCore;
using DongPoTea.Core.Entities;
using DongPoTea.Core.Interfaces;
using DongPoTea.Data.Contexts;

namespace DongPoTea.Data.Repositories;

public class ProductRepository : Repository<Product>, IProductRepository
{
    public ProductRepository(ApplicationDbContext context) : base(context)
    {
    }

    public async Task<Product?> GetByIdWithImagesAsync(Guid id)
    {
        return await _dbSet
            .Include(p => p.Images.OrderBy(i => i.DisplayOrder))
            .Include(p => p.Category)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IReadOnlyList<Product>> GetProductsByCategoryAsync(Guid categoryId)
    {
        return await _dbSet
            .Where(p => p.CategoryId == categoryId && p.IsActive)
            .Include(p => p.Images.Where(i => i.IsPrimary))
            .OrderBy(p => p.Name)
            .ToListAsync();
    }

    public async Task<IReadOnlyList<Product>> GetActiveProductsAsync(
        int skip, 
        int take, 
        string? search = null, 
        Guid? categoryId = null)
    {
        var query = _dbSet
            .Where(p => p.IsActive)
            .Include(p => p.Images.Where(i => i.IsPrimary))
            .Include(p => p.Category)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            search = search.ToLower();
            query = query.Where(p => 
                p.Name.ToLower().Contains(search) || 
                (p.Description != null && p.Description.ToLower().Contains(search)) ||
                (p.NameChinese != null && p.NameChinese.ToLower().Contains(search)) ||
                (p.DescriptionChinese != null && p.DescriptionChinese.ToLower().Contains(search)));
        }

        if (categoryId.HasValue)
        {
            query = query.Where(p => p.CategoryId == categoryId.Value);
        }

        return await query
            .OrderBy(p => p.Name)
            .Skip(skip)
            .Take(take)
            .ToListAsync();
    }

    public async Task<int> GetActiveProductsCountAsync(string? search = null, Guid? categoryId = null)
    {
        var query = _dbSet.Where(p => p.IsActive).AsQueryable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            search = search.ToLower();
            query = query.Where(p => 
                p.Name.ToLower().Contains(search) || 
                (p.Description != null && p.Description.ToLower().Contains(search)) ||
                (p.NameChinese != null && p.NameChinese.ToLower().Contains(search)) ||
                (p.DescriptionChinese != null && p.DescriptionChinese.ToLower().Contains(search)));
        }

        if (categoryId.HasValue)
        {
            query = query.Where(p => p.CategoryId == categoryId.Value);
        }

        return await query.CountAsync();
    }

    public async Task<IReadOnlyList<Product>> GetRelatedProductsAsync(Guid productId, int count = 4)
    {
        var product = await _dbSet.FindAsync(productId);
        if (product == null) return new List<Product>();

        return await _dbSet
            .Where(p => p.CategoryId == product.CategoryId && p.Id != productId && p.IsActive)
            .Include(p => p.Images.Where(i => i.IsPrimary))
            .OrderBy(p => Guid.NewGuid()) // Random order
            .Take(count)
            .ToListAsync();
    }
}