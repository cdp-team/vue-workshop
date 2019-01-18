import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRenderHTML from '../home/homepage.html';
import { Product } from './../../entities/product'

import {ProductModule} from './../../module/product.module'

@WithRenderHTML
@Component
export default class HomePage extends Vue {
   @Prop() productAip = new ProductModule.ProductViewModel();
   @Prop() productList: Product[]=[];
    constructor(){
        super();         
        this.getProductList();
    }

    getProductList(){
      this.productAip.getProductList().then((response)=>{
        this.productList = response as Product[];
       }); 
    }
    
}