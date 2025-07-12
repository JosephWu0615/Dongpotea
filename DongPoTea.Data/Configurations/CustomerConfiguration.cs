using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DongPoTea.Core.Entities;

namespace DongPoTea.Data.Configurations;

public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
{
    public void Configure(EntityTypeBuilder<Customer> builder)
    {
        builder.HasKey(c => c.Id);
        
        builder.Property(c => c.Email)
            .IsRequired()
            .HasMaxLength(256);
            
        builder.HasIndex(c => c.Email)
            .IsUnique();
            
        builder.Property(c => c.FirstName)
            .HasMaxLength(100);
            
        builder.Property(c => c.LastName)
            .HasMaxLength(100);
            
        builder.Property(c => c.Phone)
            .HasMaxLength(50);
            
        builder.Property(c => c.PreferredLanguage)
            .HasMaxLength(10)
            .HasDefaultValue("en");
    }
}