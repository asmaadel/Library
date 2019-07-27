#region Using Namespaces...

using System;
using System.Diagnostics;
using BooksApp.Data;
using BooksApp.GenericRepository;
using BooksApp.Models;

#endregion

namespace BooksApp.UnitOfWork
{
    /// <summary>
    /// Unit of Work class responsible for DB transactions
    /// </summary>
    public class UnitOfWork : IDisposable, IUnitOfWork
    {

        #region Private member variables...

        private readonly ApplicationDbContext _context = null;
        private GenericRepository<Category> _categoryRepository;
        private GenericRepository<Book> _bookRepository;
        private GenericRepository<Borrow> _borrowRepository;

        #endregion

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        #region Public Repository Creation properties...

        /// <summary>
        /// Get/Set Property for Book repository.
        /// </summary>
       GenericRepository<Book> IUnitOfWork.BookRepository {
            get
            {
                if (this._bookRepository == null)
                    this._bookRepository = new GenericRepository<Book>(_context);
                return _bookRepository;
            }
        }

        /// <summary>
        /// Get/Set Property for Book repository.
        /// </summary>
        GenericRepository<Category> IUnitOfWork.CategoryRepository
        {
            get
            {
                if (this._categoryRepository == null)
                    this._categoryRepository = new GenericRepository<Category>(_context);
                return _categoryRepository;
            }
        }

        public GenericRepository<Borrow> BorrowRepository
        {
            get
            {
                if (this._borrowRepository == null)
                    this._borrowRepository = new GenericRepository<Borrow>(_context);
                return _borrowRepository;
            }
        }

      

        #endregion

        #region Public member methods...
        /// <summary>
        /// Save method.
        /// </summary>
        public void Save()
        {
            try
            {
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }

        }

        #endregion

        #region Implementing IDiosposable...

        #region private dispose variable declaration...
        private bool disposed = false; 
        #endregion

        /// <summary>
        /// Protected Virtual Dispose method
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    Debug.WriteLine("UnitOfWork is being disposed");
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        /// <summary>
        /// Dispose method
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        } 
        #endregion
    }
}