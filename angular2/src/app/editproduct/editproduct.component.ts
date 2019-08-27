import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  pid;
  pname;
  price;
  constructor(private ep:ProductService) { }

  ngOnInit() {
  }
  
  editprod(){
    this.ep.getdata1().subscribe();
  }

}
