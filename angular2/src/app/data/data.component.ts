import { Component, OnInit } from '@angular/core';
import { CalcService } from "../calc.service";
import { MessageService } from "../message.service";
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
val;
num1;
num2;
result;
wmsg;
  constructor(private ds:CalcService,private ss:MessageService) { }

  ngOnInit() {
    /* this.val=this.ds.add1(100,34); */
   
  }
  show(){
    this.ss.getdata().subscribe(data=>{
      this.wmsg=data;
      console.log(this.wmsg);
    })
  }

  showmsg(){
    this.result=this.ds.msg({name:" Arun "});
  }
  addnum(){
    this.val=this.ds.add(this.num1,this.num2);
  }

  diffnum(){
    this.val=this.ds.diff(this.num1,this.num2);
  }

 
  
}
