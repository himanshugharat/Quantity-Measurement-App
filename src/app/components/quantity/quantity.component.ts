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
    {value: 'length-0', viewValue: 'Length'},
    {value: 'volume-1', viewValue: 'volume'},
    {value: 'temperature-2', viewValue: 'temperature'}
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
   }
   if(val == "volume"){
    quantity: this.quantity = [
      {value: 'length-0', viewValue: 'Litre'},
      {value: 'length-1', viewValue: 'Gallon'},
    ];
   }
   if(val == "temperature"){
    quantity: this.quantity = [
      {value: 'length-0', viewValue: 'Celsius'},
      {value: 'length-1', viewValue: 'Fahrenheit'},
    ];
   }
   
 }

}
