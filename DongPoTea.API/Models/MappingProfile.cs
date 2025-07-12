using AutoMapper;
using DongPoTea.Core.Entities;
using DongPoTea.API.Models.DTOs;

namespace DongPoTea.API.Models;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Product, ProductDto>()
            .ForMember(dest => dest.PrimaryImage, 
                opt => opt.MapFrom(src => src.Images.FirstOrDefault(i => i.IsPrimary)));
        
        CreateMap<Product, ProductListDto>()
            .ForMember(dest => dest.InStock, 
                opt => opt.MapFrom(src => src.StockQuantity > 0))
            .ForMember(dest => dest.PrimaryImage, 
                opt => opt.MapFrom(src => src.Images.FirstOrDefault(i => i.IsPrimary)));
        
        CreateMap<Category, CategoryDto>();
        
        CreateMap<ProductImage, ProductImageDto>();
    }
}