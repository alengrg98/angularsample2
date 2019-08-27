import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ps:HttpClient) { }

  postdata(x,y,z){
    return(this.ps.post("http://localhost:8090/postdata",{productId :x,productName:y,productPrice:z }));
  }

  getdata1(){
    return(this.ps.get("http://localhost:8090/getdata"));
  }

 /* editdata(x){
   return(this.ps.get("http://localhost:8090/"+x));
 } */

}
