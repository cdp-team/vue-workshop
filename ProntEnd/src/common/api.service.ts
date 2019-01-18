import Vue from 'vue'
import axios, { AxiosPromise, AxiosResponse } from "axios";
import VueAxios from "vue-axios";
import cors from 'cors';

const apiUrl="http://localhost:50324/api";
export class ApiService{
    constructor(){
        
        Vue.use(VueAxios, axios)    
        Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';             
    
    } 
    get(actionName:string){ 
        return new Promise((resolve, reject) => {
            Vue.axios.get<any[]>(apiUrl+'/'+actionName)
                .then(response => resolve(response.data))
                .catch(() => reject)
          });
        }
        
}    

