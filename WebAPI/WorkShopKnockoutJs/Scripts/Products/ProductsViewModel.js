var WebTraining;
(function (WebTraining) {
    var Product = WebTraining.Entities.Product;
    var ProductsViewModel = /** @class */ (function () {
        function ProductsViewModel() {
            var that = this;
            that.productList = ko.observableArray([]);
            that.product = ko.observable(new Product());
            that.products = ko.observableArray([]);
            this.GetProductList(false);
            this.isShow = ko.observable(false);
        }
        ProductsViewModel.prototype.GetProductList = function (isUpdate) {
            var that = this;
            $.ajax({
                url: '/Home/GetProducts/',
                type: 'Get',
                contentType: 'application/json',
                success: function (data) {
                    ko.mapping.fromJS(data.productList, {}, that.productList);
                    $('#productList').DataTable({
                        responsive: true
                    });
                },
                error: function () {
                }
            });
        };
        ProductsViewModel.prototype.AddProduct = function () {
            var body = ko.mapping.toJSON(this.product());
            $.ajax({
                url: '/Home/AddProducts/',
                data: body,
                type: 'Post',
                contentType: 'application/json',
                success: function (data) {
                },
                error: function () {
                }
            });
        };
        ProductsViewModel.prototype.saveData = function () {
            //alert(111);
        };
        return ProductsViewModel;
    }());
    WebTraining.ProductsViewModel = ProductsViewModel;
})(WebTraining || (WebTraining = {}));
//# sourceMappingURL=ProductsViewModel.js.map