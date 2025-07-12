using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DongPoTea.Core.Entities;

namespace DongPoTea.Data.Configurations;

public class ShoppingCartConfiguration : IEntityTypeConfiguration<ShoppingCart>
{
    public void Configure(EntityTypeBuilder<ShoppingCart> builder)
    {
        builder.HasKey(s => s.Id);
        
        builder.Property(s => s.SessionId)
            .IsRequired()
            .HasMaxLength(100);
            
        builder.HasIndex(s => s.SessionId)
            .IsUnique();
            
        builder.HasOne(s => s.Customer)
            .WithMany(c => c.ShoppingCarts)
            .HasForeignKey(s => s.CustomerId)
            .OnDelete(DeleteBehavior.SetNull);
            
        builder.HasMany(s => s.CartItems)
            .WithOne(i => i.Cart)
            .HasForeignKey(i => i.CartId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}