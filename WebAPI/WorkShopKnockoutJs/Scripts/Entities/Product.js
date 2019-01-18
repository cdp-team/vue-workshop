var WebTraining;
(function (WebTraining) {
    var Entities;
    (function (Entities) {
        var Product = /** @class */ (function () {
            function Product() {
                var that = this;
                that.productID = ko.observable("");
                that.productName = ko.observable("");
                that.supplierID = ko.observable("");
                that.categoryID = ko.observable("");
                that.quantityPerUnit = ko.observable("");
                that.unitPrice = ko.observable("");
                that.unitsInStock = ko.observable("");
                that.unitsOnOrder = ko.observable("");
                that.reorderLevel = ko.observable("");
                that.discontinued = ko.observable("");
                that.name = ko.observable("");
                that.userRating = ko.observable("");
            }
            ;
            return Product;
        }());
        Entities.Product = Product;
    })(Entities = WebTraining.Entities || (WebTraining.Entities = {}));
})(WebTraining || (WebTraining = {}));
//# sourceMappingURL=Product.js.map