import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  options = [];
  names = [];
  productTypes = ["blah"];
  objDate = Date.now();
  constructor() {
    this.options = ["Customer", "Supplier"];
    this.names = [];
    this.productTypes = ["blah"];
  }
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  toggle(element) {
      this[element] = !this[element];
  }

   // hiding dropdowns or input boxes
   public selectedVal: string;
   public hideable: boolean = false;
  onRowClick() {
    if (this.selectedVal === "Customer") {
      this.hideable = true;
    }
    else {
      this.hideable = false;
    }
    return this.hideable;
    
  }
  ngOnInit() {
  }
  onSubmit() {
    
  }

}
