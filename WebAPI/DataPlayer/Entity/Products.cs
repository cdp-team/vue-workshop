using DataPlayer.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataPlayer.Entity
{
   public class Products
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }

        public int SupplierID { get; set; }
       // public Supplier Supplier { get; set; }

        public int CategoryID { get; set; }
        //public Category Category { get; set; }
       public string QuantityPerUnit { get; set; }

        public decimal UnitPrice { get; set; }

        public int UnitsInStock { get; set; }

        public int UnitsOnOrder { get; set; }

        public int ReorderLevel { get; set; }

        public int Discontinued { get; set; }



    }
}
