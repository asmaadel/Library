using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using BooksApp.Models;
using BooksApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BooksApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryService categoryServ;
        private IBookService bookServ;
        public CategoryController(ICategoryService categoryService,IBookService bookService)
        {
            bookServ = bookService;
            categoryServ = categoryService;
        }

        // GET api/<controller>/5
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categoryServ.GetAllCategory();
        }
        [Route("~/api/Category/Books/{id}")]
        public IEnumerable<Book> Books(int id)
        {
            return categoryServ.GetAllCategoryBooks(id);
        }

        [HttpPost]
        public void Post( BorrowDto borrow)
        {
            string format = "ddd MMM dd yyyy HH:mm:ss 'GMT'K";
            var newborrow = new Borrow();
            DateTime borrowback;
            DateTime borrowin;

            DateTime.TryParseExact(borrow.BorrowBack, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out borrowback);
            DateTime.TryParseExact(borrow.BorrowIn, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out borrowin);

            newborrow.Book = bookServ.GetBookById(Convert.ToInt32(borrow.Id));
            newborrow.BorrowBack = borrowback;
            newborrow.BorrowIn = borrowin;
            bookServ.CreateBorrow(newborrow);
        }
    }
}