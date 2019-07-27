using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksApp.Models;
using BooksApp.UnitOfWork;

namespace BooksApp.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        /// <summary>
        /// Public constructor.
        /// </summary>
        public CategoryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IEnumerable<Book> GetAllCategoryBooks(int id)
        {
              var books = _unitOfWork.BookRepository.GetAll("Category").Where(x=>x.Category.Id==id).ToList();
          //  var books = _unitOfWork.BookRepository.GetWithInclude(x=>x.Category.Id==id).ToList();

            if (books.Any())
            {
                books.ForEach(item=>item.Category=null);
                return books;

            }
            return null;
        }
        public IEnumerable<Category> GetAllCategory()
        {
            var categories = _unitOfWork.CategoryRepository.GetAll().ToList();
            if (categories.Any())
            {
                return categories;
            }
            return null;
        }

    }
}
