using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DongPoTea.Core.Entities;

namespace DongPoTea.Data.Configurations;

public class OrderConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.HasKey(o => o.Id);
        
        builder.Property(o => o.OrderNumber)
            .IsRequired()
            .HasMaxLength(50);
            
        builder.HasIndex(o => o.OrderNumber)
            .IsUnique();
            
        builder.Property(o => o.CustomerEmail)
            .IsRequired()
            .HasMaxLength(256);
            
        builder.Property(o => o.Currency)
            .HasMaxLength(3)
            .HasDefaultValue("USD");
            
        builder.Property(o => o.Status)
            .IsRequired()
            .HasMaxLength(50);
            
        builder.Property(o => o.PaymentStatus)
            .IsRequired()
            .HasMaxLength(50);
            
        builder.Property(o => o.PaymentMethod)
            .HasMaxLength(50);
            
        builder.Property(o => o.StripePaymentIntentId)
            .HasMaxLength(200);
            
        builder.HasOne(o => o.Customer)
            .WithMany(c => c.Orders)
            .HasForeignKey(o => o.CustomerId)
            .OnDelete(DeleteBehavior.SetNull);
            
        builder.HasMany(o => o.OrderItems)
            .WithOne(i => i.Order)
            .HasForeignKey(i => i.OrderId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}