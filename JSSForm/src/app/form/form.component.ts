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

  constructor() {
    this.options = ["Customer", "Supplier"];
    this.names = [];
    this.productTypes = ["blah"];
  }
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public selectedVal: string;
  public hideable: boolean = false;

  objDate = Date.now();
  toggle1() {
    this.show1 = !this.show1;
  }

  toggle2() {
    this.show2 = !this.show2;
  }

  toggle3() {
    this.show3 = !this.show3;
  }

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
