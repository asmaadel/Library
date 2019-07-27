using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApp.Models
{
    public class Borrow
    {
        [Key]
        public int Id { get; set; }
        public DateTime BorrowIn { get; set; }
        public DateTime BorrowBack { get; set; }
        public virtual Book Book { get; set; }
    }
}
