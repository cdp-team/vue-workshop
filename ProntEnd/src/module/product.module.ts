import Vue from 'vue'
import axios, { AxiosPromise, AxiosResponse } from "axios";

import {ApiService} from './../common/api.service'
export module ProductModule { 
    const apiSerVice = new ApiService();
    export class ProductViewModel{
        constructor(){                
        } 

        getProductList(){          
           return apiSerVice.get("getProductList").then((response)=>{             
                return response;
            });            
        }    
    }
}