import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  onSubmit(){
      alert("Thanks for submitting!");
      setTimeout(() => {
        this.router.navigate(['/history']);
      }, 2000);  
    }
}
