using BooksApp.Models;
using System.Collections.Generic;

namespace BooksApp.Services
{
    public interface IBookService
    {
        Book GetBookById(int BooktId);
        IEnumerable<Book> GetAllBooks();
        int CreateBook(Book BookEntity);
        bool UpdateBook(Book BookEntity);
        bool DeleteBook(int BookId);
        IEnumerable<Borrow> GetAllBorrows();
        IEnumerable<Borrow> GetBookBorrows(int id);

        int CreateBorrow(Borrow borrow);
    }
}
