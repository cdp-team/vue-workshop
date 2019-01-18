namespace WebTraining.Entities {
    export interface IProduct {
        ProductID: string;
        ProductName: string;
        SupplierID: string;
        CategoryID: string;
        QuantityPerUnit: string;
        UnitPrice: string;
        UnitsInStock: string;
        UnitsOnOrder: string;
        ReorderLevel: string;
        Discontinued: string;
    }
    export class Product {// extends ObservableObject<IProduct> {
        productID: KnockoutObservable<string>;
        productName: KnockoutObservable<string>;
        supplierID: KnockoutObservable<string>;
        categoryID: KnockoutObservable<string>;
        quantityPerUnit: KnockoutObservable<string>;
        unitPrice: KnockoutObservable<string>;;
        unitsInStock: KnockoutObservable<string>;
        unitsOnOrder: KnockoutObservable<string>;
        reorderLevel: KnockoutObservable<string>;
        discontinued: KnockoutObservable<string>;
        name: KnockoutObservable<string>;
        userRating: KnockoutObservable<string>;

        public constructor() {
            let that = this;
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
        //public constructor(dataObject?: IProduct) {
        //    super();
        //    if (dataObject != null)
        //        this.DataObjectToObservable(dataObject);
            
        //}


        //DataObjectToObservable =
        //    /**
        //     * set observables with datas from ICustomer
        //     */
        //    (datas: IProduct): void => {
        //        let that = this;
        //        that.productID(datas.ProductID);
        //        that.productName(datas.ProductName);
        //        that.supplierID(datas.SupplierID);
        //        that.categoryID(datas.CategoryID);
        //        that.quantityPerUnit(datas.QuantityPerUnit);
        //        that.unitPrice(datas.UnitPrice);
        //        that.unitsInStock(datas.UnitsInStock);
        //        that.unitsOnOrder(datas.UnitsOnOrder);
        //        that.reorderLevel(datas.ReorderLevel);
        //        that.discontinued(datas.Discontinued);
        //    };

        //ObservableToDataObject =(): IProduct => {
        //        let that = this;
        //        return {
        //            ProductID:that.productID(),
        //            ProductName:that.productName(),
        //            SupplierID:that.supplierID(),
        //            CategoryID:that.categoryID(),
        //            QuantityPerUnit:that.quantityPerUnit(),
        //            UnitPrice:that.unitPrice(),
        //            UnitsInStock: that.unitsInStock(),
        //            ReorderLevel:that.reorderLevel(),
        //            UnitsOnOrder: that.unitsOnOrder(),
        //            Discontinued:that.discontinued()
        //        }
        //    };

    }
}