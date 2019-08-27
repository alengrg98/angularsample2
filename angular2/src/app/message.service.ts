import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private hc:HttpClient) { }

public getdata(){
  let url="http://localhost:8090/data"
  return this.hc.get(url);
}
}
