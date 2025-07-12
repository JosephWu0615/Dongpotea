using Microsoft.EntityFrameworkCore.Storage;
using DongPoTea.Core.Entities;
using DongPoTea.Core.Interfaces;
using DongPoTea.Data.Contexts;

namespace DongPoTea.Data.Repositories;

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;
    private IDbContextTransaction? _transaction;
    private IProductRepository? _products;
    private IRepository<Category>? _categories;
    private IRepository<Order>? _orders;
    private IRepository<ShoppingCart>? _shoppingCarts;
    private IRepository<Customer>? _customers;

    public UnitOfWork(ApplicationDbContext context)
    {
        _context = context;
    }

    public IProductRepository Products => _products ??= new ProductRepository(_context);
    public IRepository<Category> Categories => _categories ??= new Repository<Category>(_context);
    public IRepository<Order> Orders => _orders ??= new Repository<Order>(_context);
    public IRepository<ShoppingCart> ShoppingCarts => _shoppingCarts ??= new Repository<ShoppingCart>(_context);
    public IRepository<Customer> Customers => _customers ??= new Repository<Customer>(_context);

    public async Task<int> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync();
    }

    public async Task BeginTransactionAsync()
    {
        _transaction = await _context.Database.BeginTransactionAsync();
    }

    public async Task CommitTransactionAsync()
    {
        if (_transaction != null)
        {
            await _transaction.CommitAsync();
            await _transaction.DisposeAsync();
            _transaction = null;
        }
    }

    public async Task RollbackTransactionAsync()
    {
        if (_transaction != null)
        {
            await _transaction.RollbackAsync();
            await _transaction.DisposeAsync();
            _transaction = null;
        }
    }

    public void Dispose()
    {
        _transaction?.Dispose();
        _context.Dispose();
    }
}