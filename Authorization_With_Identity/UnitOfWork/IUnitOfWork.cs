using BooksApp.GenericRepository;
using BooksApp.Models;

namespace BooksApp.UnitOfWork
{
    public interface IUnitOfWork
    {
        /// <summary>
        /// Save method.
        /// </summary>
        void Save();
        GenericRepository<Book> BookRepository { get; }
        GenericRepository <Borrow> BorrowRepository { get; }
        GenericRepository<Category> CategoryRepository { get; }

    }
}