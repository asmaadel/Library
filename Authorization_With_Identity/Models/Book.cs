using Nancy.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace BooksApp.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public virtual Category Category { get; set; }
        public DateTime publishedIn { get; set; }
        public virtual ICollection<Borrow> Borrows { get; set; }
    }
}
