import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  public add(a,b){
    return (a+b);
  
  }
  public diff(a,b){
    return (a-b);
  }

  public msg(txt){
    return {wmsg:"Welcome" +txt.name};
  }
  
  }

