using System.Web;
using System.Web.Mvc;
using WebAPI.Filters;

namespace WebAPI
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            //filters.Add(new HandleErrorAttribute());
            //filters.Add(new AuthorizationFilter());
        }
    }
}
