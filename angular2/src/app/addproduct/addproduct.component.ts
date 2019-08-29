import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
pid;
pname;
price;
  constructor(private es:ProductService,private rt:Router) { }
   
  
  ngOnInit() {
  }

  addprod(){
    this.es.postdata(this.pid,this.pname,this.price).subscribe();
    this.rt.navigateByUrl("/home/view");
  }


}
