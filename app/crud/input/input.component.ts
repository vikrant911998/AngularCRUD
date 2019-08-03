import { CrudoperationsService, Item } from './../crudoperations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public crudService:CrudoperationsService) { }

  ngOnInit() {
  }

  add(id:string,name:string,username:string,password:string):void{
    // console.log("Id is "+id+" Name is "+name+" username is "+username+" password is "+password);
    this.crudService.add(new Item(parseInt(id),name,username,password));
  }
}
