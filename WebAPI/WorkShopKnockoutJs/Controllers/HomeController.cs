using DataPlayer.Entity;
using DataPlayer.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAPI.Controllers
{

    public class HomeController : Controller
    {
        private ProductsRepository productrepo;
        public HomeController()
        {
            productrepo = new ProductsRepository();
        }       
        public ActionResult Index()
        {
            return View();
        }      
        public JsonResult GetProducts()
        {
            IEnumerable<Products> result = NewMethod();
            return Json(new { success = true, productList = result.ToList() }, JsonRequestBehavior.AllowGet);
        }

        private IEnumerable<Products> NewMethod()
        {
            return productrepo.GetData();
        }

        [HttpPost]
        public JsonResult AddProducts(Products model)
        {

            var result = productrepo.Add(model);
            return Json(new { success = true, productList = result }, JsonRequestBehavior.AllowGet);
        }


    }
}
