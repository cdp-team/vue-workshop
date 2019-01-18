using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataPlayer.Repository;

namespace WebAPI.Filters
{
    public class AuthorizationFilter : AuthorizeAttribute
    {
        //private EmployeeRepository _db = new EmployeeRepository();
        //protected override bool AuthorizeCore(HttpContextBase httpContext)
        //{
        //    try
        //    {
        //        if(EmployeeRepository.HelloUser != null)
        //            return true;
        //        string username = HttpContext.Current.Request.Form["UserName"];
        //        string password = HttpContext.Current.Request.Form["Password"];
        //        var isNew = (bool) (HttpContext.Current.Session["RegisterUser"] ?? false);
        //        return _db.IsAuthenticated(username, password) || isNew;
        //    }
        //    catch(Exception ex)
        //    {

        //    }

        //    return false;
        //}

        //protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        //{

        //    filterContext.Result = new RedirectResult("~/Employee/HelloError");

        //}
    }
}