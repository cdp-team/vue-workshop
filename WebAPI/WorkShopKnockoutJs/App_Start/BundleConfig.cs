using System.Web;
using System.Web.Optimization;

namespace WebAPI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/knockout-{version}.debug.js",
                "~/Scripts/knockout.*"
                //"~/Scripts/require.js",
                //"~/Scripts/knockout-{version}.js",
                //"~/Scripts/knockout.mapping-latest.js",
                //"~/Scripts/knockout.mapping-latest.debug.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/Customer").Include(
                "~/Scripts/knockout-2.3.0.debug.js",
                "~/Scripts/Customers/knockout.samples.js"
            ));
            bundles.Add(new ScriptBundle("~/bundles/Customers").Include(
                "~/Scripts/knockout-2.3.0.debug.js",
                "~/Scripts/knockout.mapping-latest.js",
                "~/Scripts/knockout.mapping-latest.debug.js",
                "~/Scripts/Customers/CustomersViewModel.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/Products").Include(
                 "~/Scripts/ObservableObject.js",
                  "~/Scripts/Entities/Product.js",
                   "~/Scripts/Products/RadioButton.js",
                "~/Scripts/Products/ProductsViewModel.js"               
                
            ));

            bundles.Add(new ScriptBundle("~/bundles/Categories").Include(
                "~/Scripts/Categories/CategoriesViewModel.js",
                "~/Scripts/Categories/CrudCategoryViewModel.js",
                "~/Scripts/Entity/Category/Category.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/Employee").Include(
                "~/Scripts/Employee/EmployeesViewModel.js"));

            bundles.Add(new ScriptBundle("~/bundles/Suppliers").Include(
                "~/Scripts/Suppliers/SuppliersViewModel.js",
                "~/Scripts/Entities/Suppliers.js"
            ));
           
            bundles.Add(new ScriptBundle("~/bundles/Credential").Include(
                "~/Scripts/Common/CredentialViewModel.js"));
        }
    }
}

