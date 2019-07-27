using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApp.Models
{
    public class BorrowDto
    {
        public string Id { get; set; }
        public string BorrowIn { get; set; }
        public string BorrowBack { get; set; }
    }
}
