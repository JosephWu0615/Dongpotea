# Dong Po Tea E-Commerce Platform

A modern e-commerce platform for selling Taiwanese tea products, built with React, .NET 8, and Azure-ready architecture.

## Tech Stack

### Backend
- **.NET 8** C# ASP.NET Core Web API
- **Entity Framework Core** with SQL Server
- **Clean Architecture** with Domain-Driven Design
- **JWT Authentication**
- **Serilog** for logging
- **AutoMapper** for object mapping
- **FluentValidation** for input validation

### Frontend
- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **Styled Components** for styling
- **React Router** for navigation
- **Axios** for API calls
- **React Hook Form** for forms
- **i18next** for internationalization

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (v16 or higher)
- [SQL Server](https://www.microsoft.com/sql-server/sql-server-downloads) (LocalDB, Express, or Developer Edition)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Dongpotea
```

### 2. Backend Setup

#### Install Dependencies
```bash
# Navigate to the solution directory
cd /path/to/Dongpotea

# Restore NuGet packages
dotnet restore
```

#### Configure Database

1. **Update Connection String**
   
   Edit `DongPoTea.API/appsettings.json` and update the connection string:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=DongPoTeaDb;Trusted_Connection=True;MultipleActiveResultSets=true"
     }
   }
   ```
   
   For SQL Server Express:
   ```json
   "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=DongPoTeaDb;Trusted_Connection=True;MultipleActiveResultSets=true"
   ```

2. **Create Database and Apply Migrations**
   ```bash
   # Navigate to the Data project
   cd DongPoTea.Data

   # Create initial migration
   dotnet ef migrations add InitialCreate --startup-project ../DongPoTea.API

   # Update database
   dotnet ef database update --startup-project ../DongPoTea.API
   ```

#### Run the Backend
```bash
# Navigate back to solution root
cd ..

# Run the API
dotnet run --project DongPoTea.API
```

The API will start at `http://localhost:5000` (or `https://localhost:5001` for HTTPS).

You can access Swagger UI at `http://localhost:5000` to test the API endpoints.

### 3. Frontend Setup

#### Install Dependencies
```bash
# Navigate to the React app
cd DongPoTea.Web

# Install packages using Yarn
yarn install

# Or using npm
npm install
```

#### Configure Environment Variables

Create a `.env` file in `DongPoTea.Web` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
REACT_APP_GA_TRACKING_ID=your_google_analytics_id
REACT_APP_STORAGE_URL=http://localhost:5000/storage
```

#### Run the Frontend
```bash
# Using Yarn
yarn start

# Or using npm
npm start
```

The React app will start at `http://localhost:3000`.

## Project Structure

```
Dongpotea/
├── DongPoTea.API/          # ASP.NET Core Web API
├── DongPoTea.Core/         # Domain models and interfaces
├── DongPoTea.Data/         # Data access layer with EF Core
├── DongPoTea.Infrastructure/ # External services implementation
├── DongPoTea.Web/          # React frontend application
├── specs/                  # Project specifications
└── DongPoTea.sln          # Solution file
```

## Seed Data (Optional)

To add sample data for testing, create a file `DongPoTea.Data/SeedData.cs`:

```csharp
using DongPoTea.Core.Entities;
using DongPoTea.Data.Contexts;

namespace DongPoTea.Data;

public static class SeedData
{
    public static async Task Initialize(ApplicationDbContext context)
    {
        // Check if data exists
        if (context.Categories.Any())
            return;

        // Add categories
        var teaBagsCategory = new Category
        {
            Name = "Tea Bags",
            NameChinese = "茶包",
            Slug = "tea-bags",
            IsActive = true
        };

        var looseTeaCategory = new Category
        {
            Name = "Loose Tea",
            NameChinese = "散茶",
            Slug = "loose-tea",
            IsActive = true
        };

        context.Categories.AddRange(teaBagsCategory, looseTeaCategory);
        await context.SaveChangesAsync();

        // Add sample products
        var products = new List<Product>
        {
            new Product
            {
                Name = "Oriental Beauty Tea",
                NameChinese = "東方美人茶",
                Description = "A premium Taiwanese oolong tea with natural honey and fruit notes.",
                SKU = "OBT-001",
                Price = 45.00m,
                CategoryId = looseTeaCategory.Id,
                StockQuantity = 50,
                Weight = 100,
                IsActive = true
            },
            new Product
            {
                Name = "High Mountain Oolong",
                NameChinese = "高山烏龍茶",
                Description = "Grown at elevations above 1,000 meters for a delicate, floral taste.",
                SKU = "HMO-001",
                Price = 38.00m,
                CategoryId = looseTeaCategory.Id,
                StockQuantity = 75,
                Weight = 100,
                IsActive = true
            },
            new Product
            {
                Name = "Iron Goddess Tea Bags",
                NameChinese = "鐵觀音茶包",
                Description = "Traditional Tieguanyin oolong in convenient tea bag form.",
                SKU = "TGY-TB001",
                Price = 25.00m,
                CategoryId = teaBagsCategory.Id,
                StockQuantity = 100,
                Weight = 50,
                IsActive = true
            }
        };

        context.Products.AddRange(products);
        await context.SaveChangesAsync();
    }
}
```

Then update `Program.cs` in the API project to seed data on startup:

```csharp
// Add before app.Run();
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    await SeedData.Initialize(context);
}
```

## Development Commands

### Backend Commands
```bash
# Build the solution
dotnet build

# Run tests
dotnet test

# Add a new migration
cd DongPoTea.Data
dotnet ef migrations add MigrationName --startup-project ../DongPoTea.API

# Update database
dotnet ef database update --startup-project ../DongPoTea.API

# Remove last migration
dotnet ef migrations remove --startup-project ../DongPoTea.API
```

### Frontend Commands
```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Lint code
yarn lint

# Format code
yarn format
```

## API Endpoints

### Products
- `GET /api/products` - Get all products with pagination
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/{id}/related` - Get related products

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/{slug}` - Get category by slug

### Cart
- `GET /api/cart` - Get current cart
- `POST /api/cart/items` - Add item to cart
- `PUT /api/cart/items/{itemId}` - Update cart item quantity
- `DELETE /api/cart/items/{itemId}` - Remove item from cart
- `DELETE /api/cart` - Clear cart

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Ensure SQL Server is running
   - Check connection string in appsettings.json
   - Try using SQL Server Management Studio to test connection

2. **CORS Errors**
   - Make sure the API is running on the expected port
   - Check CORS configuration in Program.cs
   - Update REACT_APP_API_URL in .env file

3. **Port Already in Use**
   - API: Change port in `launchSettings.json`
   - React: Set PORT environment variable: `PORT=3001 yarn start`

4. **Migration Errors**
   - Delete Migrations folder and recreate
   - Drop database and recreate: `dotnet ef database drop --startup-project ../DongPoTea.API`

### Logs

- **API Logs**: Check `DongPoTea.API/logs/` directory
- **Browser Console**: For frontend errors
- **Network Tab**: To debug API calls

## Next Steps

1. **Authentication**: Implement user registration and login
2. **Payment Integration**: Complete Stripe integration
3. **Admin Panel**: Build admin interface for managing products
4. **Image Upload**: Implement Azure Blob Storage for product images
5. **Email Service**: Add order confirmation emails
6. **Search**: Implement full-text search for products
7. **Reviews**: Add product review system

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add some feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is licensed under the MIT License.