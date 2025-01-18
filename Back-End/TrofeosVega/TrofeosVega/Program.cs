using Microsoft.Extensions.FileProviders;
using TrofeosVega;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddSqlServer<TrofeosContext>(builder.Configuration.GetConnectionString("cnTrofeos"));
builder.Services.AddCors(options =>
{
    options.AddPolicy("NuevaPolitica", app =>
    {
        app.WithOrigins("http://localhost:4200", "http://localhost:5173")
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowCredentials();
    });
});

    builder.Services.Configure<IISServerOptions>(options =>
    {
        options.MaxRequestBodySize = 10 * 1024 * 1024; // 
    });
    // Otras configuraciones...



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();

app.UseCors("NuevaPolitica");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
