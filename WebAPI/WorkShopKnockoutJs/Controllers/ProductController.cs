using DataPlayer.Entity;
using DataPlayer.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ProductController : ApiController
    {
        private ProductsRepository productrepo;
        public ProductController()
        {
            productrepo = new ProductsRepository();
        }
        // GET api/values
        [Route("api/getProductList")]
        [HttpGet]
        public IEnumerable<Products> Get()
        {
            var result = productrepo.GetData();
            return result;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
