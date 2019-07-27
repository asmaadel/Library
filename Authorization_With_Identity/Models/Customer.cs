using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace BooksApp.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public int UserId { get; set; }
      //  public virtual Collection<Order> Orders { set; get; }
    }
}
