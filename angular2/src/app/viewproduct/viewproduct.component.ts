import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  data1;
  constructor(private vs:ProductService,private vr:Router) { }

  ngOnInit() {
    this.vs.getdata1().subscribe(data=>{
      this.data1=data;
    });
   
    
  }

  editpro(){
    this.vr.navigateByUrl("");
  }


}
