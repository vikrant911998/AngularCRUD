import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudoperationsService {
  items:Item[] = [];
  constructor() { }

  add(item:Item):void{
    this.items.push(item);
    console.log("Customers are ",this.items);
    // localStorage.items = this.items;
  }
}


export class Item{
  constructor(public id:number,public name:string, public username:string, public password:string){

  }
}