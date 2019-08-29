import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router,ActivatedRoute} from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  pid;
  pname;
  price;
  constructor(private ep:ProductService,private ear:ActivatedRoute,private erouter:Router) { }
  tempid;
  ngOnInit() {
      this.tempid=this.ear.snapshot.paramMap.get("id");
      console.log(this.tempid);
      this.ep.getdata2(this.tempid).subscribe(data=>{
        this.pid=data[0].productId;
        this.pname=data[0].productName;
        this.price=data[0].productPrice;
      });
      
  }
  
  editprod(){
    this.ep.editdata(this.pid,this.pname,this.price).subscribe();
    this.erouter.navigateByUrl("/home/view");
  }

}
