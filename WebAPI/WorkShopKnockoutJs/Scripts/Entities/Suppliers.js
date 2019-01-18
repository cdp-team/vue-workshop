var Entities;
(function (Entities) {
    var Suppliers = /** @class */ (function () {
        function Suppliers() {
            var t = this;
            t.SupplierID = ko.observable(0);
            t.CompanyName = ko.observable("");
            t.ContactName = ko.observable("");
            t.ContactTitle = ko.observable("");
            t.Address = ko.observable("");
            t.City = ko.observable("");
            t.Region = ko.observable("");
            t.PostalCode = ko.observable("");
            t.Country = ko.observable("");
            t.Phone = ko.observable("");
            t.Fax = ko.observable("");
            t.HomePage = ko.observable("");
        }
        return Suppliers;
    }());
    Entities.Suppliers = Suppliers;
})(Entities || (Entities = {}));
//# sourceMappingURL=Suppliers.js.map