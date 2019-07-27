using BooksApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BooksApp.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) {
            
        }
        public DbSet<Customer> Customers { set; get; }

        public DbSet<Book> Books { get; set; }
        public DbSet<Borrow> Borrows { get; set; }

        public DbSet<Category> Categories { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Category>()
        .HasMany(c => c.Books)
        .WithOne(e => e.Category)
        .OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<Book>().HasOne(x => x.Category);
        }
    }
}
