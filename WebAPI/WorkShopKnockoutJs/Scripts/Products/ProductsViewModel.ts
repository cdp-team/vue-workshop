

namespace WebTraining
{       
    import Product = Entities.Product;
    export class ProductsViewModel  {
        public productList: KnockoutObservableArray<Product>;
        public GetListProduct: Function;
        public product: KnockoutObservable<Product>;
        public products: KnockoutObservableArray<Product>;
        public Name: KnockoutObservable<string>;
        public isShow: KnockoutObservable<boolean>;
        constructor() {          
            let that = this;           
            that.productList = ko.observableArray([]);      
            that.product = ko.observable(new Product());
            that.products = ko.observableArray([]);  
            this.GetProductList(false);            
            this.isShow = ko.observable(false);  
        }

        public GetProductList(isUpdate:boolean)
        {            
            let that = this;         
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
        } 

        public AddProduct(this) {
            
            let body = ko.mapping.toJSON(this.product());
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
        }

        public saveData() {
        //alert(111);
    }
    }
}
