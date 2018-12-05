import { Component, OnInit } from '@angular/core';
import { CommonModule }  from '@angular/common';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoricalComponent implements OnInit {
  months = [];

  constructor() {
    this.months = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
  }
  add() {
 
  }
  edit(){
 
  }

  onSubmit() {
    
  }

  ngOnInit() {
 
  }

}
