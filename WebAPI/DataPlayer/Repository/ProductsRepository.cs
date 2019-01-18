using Dapper;
using DataPlayer.Base;
using DataPlayer.Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataPlayer.Repository
{
    public class ProductsRepository: DPGenericRepository<Products>
    {
        public ProductsRepository()
        {
            this.PrimaryId = "ProductID";
        }

        //public IEnumerable<Products> GetProduct()
        //{
        //    using (var connection = new SqlConnection(connectionString))
        //    {
        //        var sql = "select * from Products p inner join Suppliers s on p.SupplierID=s.SupplierID inner join Categories c on p.CategoryID = c.CategoryID";
        //        connection.Open();
        //        var productDictionary = new Dictionary<int, Products>();


        //        var list = connection.Query<Products, Supplier, Category, Products>(
        //            sql,
        //            (product, supplier, category) =>
        //            {
        //                Products proEntry;

        //                if (!productDictionary.TryGetValue(product.ProductID, out proEntry))
        //                {
        //                    proEntry = product;
        //                    proEntry.Supplier = new Supplier();
        //                    proEntry.Category = new Category();
        //                    productDictionary.Add(proEntry.ProductID, proEntry);
        //                }

        //                proEntry.Supplier = supplier;
        //                proEntry.Category = category;
        //                return proEntry;
        //            },
        //            splitOn: "SupplierID")
        //        .Distinct();                           
        //        return list;
        //    }
        //}
        
    }
}
