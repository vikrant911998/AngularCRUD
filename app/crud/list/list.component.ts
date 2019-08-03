import { CrudoperationsService } from './../crudoperations.service';
import { Component, OnInit } from '@angular/core';
import {Item} from './../crudoperations.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items:Item[] = [];
  constructor(public crudService:CrudoperationsService) { }

  ngOnInit() {
    // this.items = localStorage.items;
  }

}
