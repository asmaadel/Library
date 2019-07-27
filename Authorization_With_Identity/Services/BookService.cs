using BooksApp.UnitOfWork;
using BooksApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;

namespace BooksApp.Services
{
    public class BookService:IBookService
    {
        private readonly IUnitOfWork _unitOfWork;

        /// <summary>
        /// Public constructor.
        /// </summary>
        public BookService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Fetches Book details by id
        /// </summary>
        /// <param name="BookId"></param>
        /// <returns></returns>
        public Book GetBookById(int BookId)
        {
            var Book = _unitOfWork.BookRepository.GetByID(BookId);
            if (Book != null)
            {
                return Book;
            }
            return null;
        }

        /// <summary>
        /// Fetches all the Books.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Book> GetAllBooks()
        {
            var Books = _unitOfWork.BookRepository.GetAll().ToList();
            if (Books.Any())
            {
                return Books;
            }
            return null;
        }

        /// <summary>
        /// Creates a Book
        /// </summary>
        /// <param name="BookEntity"></param>
        /// <returns></returns>
        public int CreateBook(Book BookEntity)
        {
            using (var scope = new TransactionScope())
            {
                var Book = new Book
                {
                    //Date = BookEntity.Date,
                    //TotalAmount=BookEntity.TotalAmount,
                    //Customer=BookEntity.Customer,
                    //BookItem=BookEntity.BookItem
                };
                _unitOfWork.BookRepository.Insert(Book);
                _unitOfWork.Save();
                scope.Complete();
                return Book.Id;
            }
        }
      public int CreateBorrow(Borrow borrow)
        {
            using (var scope = new TransactionScope())
            {              
                _unitOfWork.BorrowRepository.Insert(borrow);
                _unitOfWork.Save();
                scope.Complete();
                return borrow.Id;
            }
        }


        /// <summary>
        /// Updates a Book
        /// </summary>
        /// <param name="BookId"></param>
        /// <param name="BookEntity"></param>
        /// <returns></returns>
        public bool UpdateBook( Book BookEntity)
        {
            var success = false;
            if (BookEntity != null)
            {
                using (var scope = new TransactionScope())
                {
                    var Book = _unitOfWork.BookRepository.GetByID(BookEntity.Id);
                    if (Book != null)
                    {
                        //Book.Date = DateTime.Now;
                        //Book.TotalAmount = BookEntity.TotalAmount;
                        //Book.Customer = BookEntity.Customer;
                        //Book.BookItem = BookEntity.BookItem;
                        _unitOfWork.BookRepository.Update(Book);
                        _unitOfWork.Save();
                        scope.Complete();
                        success = true;
                    }
                }
            }
            return success;
        }

        /// <summary>
        /// Deletes a particular Book
        /// </summary>
        /// <param name="BookId"></param>
        /// <returns></returns>
        public bool DeleteBook(int BookId)
        {
            var success = false;
            if (BookId > 0)
            {
                using (var scope = new TransactionScope())
                {
                    var Book = _unitOfWork.BookRepository.GetByID(BookId);
                    if (Book != null)
                    {

                        _unitOfWork.BookRepository.Delete(Book);
                        _unitOfWork.Save();
                        scope.Complete();
                        success = true;
                    }
                }
            }
            return success;
        }

        public IEnumerable<Borrow> GetAllBorrows()
        {
            var BookItems = _unitOfWork.BorrowRepository.GetAll();
            if (BookItems != null)
            {
                return BookItems;
            }
            return null;
        }

        public IEnumerable<Borrow> GetBookBorrows(int id)
        {
            var BookItems = _unitOfWork.BorrowRepository.GetAll().Where(x=>x.Book.Id==id);
            if (BookItems != null)
            {
                return BookItems;
            }
            return null;

        } 
    }
}