using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using BooksApp.Data;
using BooksApp.Models;
using BooksApp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BooksApp.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private IBookService bookServ;
        public BookController(IBookService bookService)
        {
            bookServ = bookService;
        }
        [HttpGet]
        public IEnumerable<Book> Get()
        {
              return bookServ.GetAllBooks();
        }
        [Route("~/api/Book/BookItems/{id}")]
        public IEnumerable<Borrow> BookBorrows(int id)
        {
            return bookServ.GetBookBorrows(id);
        }
        [HttpDelete("{id}")]
        public bool delete(int id)
        {
            return bookServ.DeleteBook(id);
        }
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Book Get(int id)
        {
            return bookServ.GetBookById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] BorrowDto borrow)
        {
            string format = "ddd MMM dd yyyy HH:mm:ss 'GMT'K";
            var newborrow = new Borrow();
            DateTime borrowback;
            DateTime borrowin;

            DateTime.TryParseExact(borrow.BorrowBack, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out borrowback);
            DateTime.TryParseExact(borrow.BorrowIn, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out borrowin);

            newborrow.Book= bookServ.GetBookById(Convert.ToInt32(borrow.Id));
            newborrow.BorrowBack = borrowback;
            newborrow.BorrowIn = borrowin;
            bookServ.CreateBorrow(newborrow);
        }
        [HttpPut]
        public bool put([FromBody] Book book)
        {
         return bookServ.UpdateBook(book);
        }
    }
}