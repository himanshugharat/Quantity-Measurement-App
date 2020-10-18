import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface quantity {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  form: FormGroup;
  quantity: quantity[] = [
    {value: 'length-0', viewValue: 'Feet'},
      {value: 'length-1', viewValue: 'Inch'},
      {value: 'length-2', viewValue: 'Yard'},
      {value: 'length-3', viewValue: 'Centimeter'},
  ];
  selectedFood = this.quantity[0].value;

  constructor() {} 

  ngOnInit(): void {
  
  }
 logMg(val){
   if(val == "length"){
    quantity: this.quantity = [
      {value: 'length-0', viewValue: 'Feet'},
      {value: 'length-1', viewValue: 'Inch'},
      {value: 'length-2', viewValue: 'Yard'},
      {value: 'length-3', viewValue: 'Centimeter'},
    ];
    this.selectedFood = this.quantity[0].value;
   }
   if(val == "volume"){
    quantity: this.quantity = [
      {value: 'volume-0', viewValue: 'Litre'},
      {value: 'volume-1', viewValue: 'Gallon'},
    ];
    this.selectedFood = this.quantity[0].value;
   }
   if(val == "temperature"){
    quantity: this.quantity = [
      {value: 'temperature-0', viewValue: 'Celsius'},
      {value: 'temperature-1', viewValue: 'Fahrenheit'},
    ];
    this.selectedFood = this.quantity[0].value;
   }
   
 }

}
