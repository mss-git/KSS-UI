import { Component, OnInit } from '@angular/core';
import { CommonModule }  from '@angular/common';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
  onSubmit() {
    alert("Thanks for submitting!");
  }

}
