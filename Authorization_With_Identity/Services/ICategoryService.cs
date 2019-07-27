using BooksApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApp.Services
{
   public interface ICategoryService
    {
        IEnumerable<Category> GetAllCategory();

        IEnumerable<Book> GetAllCategoryBooks(int id);
    }
}
