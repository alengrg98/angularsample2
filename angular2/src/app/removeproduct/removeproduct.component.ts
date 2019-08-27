import { Component, OnInit } from '@angular/core';
/* import {LOCAL_STORAGE,WebStorageService, StorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';
 */
@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})

/* @Inject(LOCAL_STORAGE) private storage:StorageService */
export class RemoveproductComponent implements OnInit {
name;
user1;
  constructor() { }

  ngOnInit() {
       this.user1=localStorage.getItem("username"); 
  }
  session(){
    localStorage.setItem("username",this.name);
  }

}
