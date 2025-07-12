# Quick Start Guide - Dong Po Tea

This guide will get you up and running in under 5 minutes!

## Prerequisites Check

Make sure you have these installed:
```bash
# Check .NET version (should be 8.0 or higher)
dotnet --version

# Check Node.js version (should be 16 or higher)
node --version

# Check if SQL Server LocalDB is installed (Windows)
sqllocaldb info

# For macOS/Linux, check if SQL Server is running
# You'll need Docker Desktop with SQL Server container
```

## 1. Quick Backend Setup (2 minutes)

```bash
# Open Terminal/Command Prompt in the project root directory
cd /path/to/Dongpotea

# Install dependencies and build
dotnet restore
dotnet build

# Create and apply database (using LocalDB)
cd DongPoTea.Data
dotnet ef migrations add InitialCreate --startup-project ../DongPoTea.API
dotnet ef database update --startup-project ../DongPoTea.API
cd ..

# Run the API
dotnet run --project DongPoTea.API
```

✅ Backend should now be running at http://localhost:5000

## 2. Quick Frontend Setup (2 minutes)

**Open a new terminal window** (keep the API running)

```bash
# Navigate to React app
cd DongPoTea.Web

# Create environment file
cp .env.example .env

# Install dependencies
yarn install
# OR if you prefer npm:
# npm install

# Start the app
yarn start
# OR
# npm start
```

✅ Frontend should now be running at http://localhost:3000

## 3. Verify Everything Works

1. Open http://localhost:3000 in your browser
2. You should see the Dong Po Tea homepage
3. Click on "Shop" to see products (will be empty initially)

## 4. Add Sample Data (Optional)

To see the site with sample products:

1. Open http://localhost:5000 (API Swagger UI)
2. You can use the API endpoints to add test data
3. Or follow the seed data instructions in the main README

## Common Issues & Quick Fixes

### "Connection refused" error
- Make sure the API is running (check the first terminal)
- Verify the API URL in `.env` file matches your API port

### Database connection error
- For Windows: Make sure SQL Server LocalDB is installed
- For Mac/Linux: Use Docker:
  ```bash
  docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong@Passw0rd" \
    -p 1433:1433 --name sql1 -d mcr.microsoft.com/mssql/server:2022-latest
  ```
  Then update connection string in `appsettings.json`:
  ```json
  "DefaultConnection": "Server=localhost,1433;Database=DongPoTeaDb;User Id=sa;Password=YourStrong@Passw0rd;TrustServerCertificate=True"
  ```

### Port already in use
- API: Edit `DongPoTea.API/Properties/launchSettings.json` to change port
- React: Run with `PORT=3001 yarn start`

### CORS errors
- Make sure the API URL in `.env` is correct
- Check that both apps are running

## Next Steps

Now that you have the basic setup running:

1. **Explore the API**: Visit http://localhost:5000 to see all available endpoints
2. **Add Products**: Use the API to add some test products
3. **Customize**: Start modifying components in `DongPoTea.Web/src`
4. **Read Full Docs**: Check the main README.md for detailed information

## Stop the Applications

- **API**: Press `Ctrl+C` in the terminal running the API
- **React**: Press `Ctrl+C` in the terminal running the React app

Happy coding! 🍵