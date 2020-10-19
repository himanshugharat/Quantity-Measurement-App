import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface quantity {
  value: string;
  viewValue: string;
  convert: number;
}
@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  value1: number
  value2: number
  content: string
  input1: number
  form: FormGroup;
  quantity: quantity[] = [
    { value: 'length-0', viewValue: 'Feet', convert: 12 },
    { value: 'length-1', viewValue: 'Inch', convert: 1 },
    { value: 'length-2', viewValue: 'Yard', convert: 36 },
    { value: 'length-3', viewValue: 'Centimeter', convert: 0.4 },
  ];
  selectedQuantity = this.quantity[0].value;

  constructor() { }

  ngOnInit(): void {

  }
  logMg(val) {
    if (val == "length") {
      this.quantity = [
        { value: 'length-0', viewValue: 'Feet', convert: 12 },
        { value: 'length-1', viewValue: 'Inch', convert: 1 },
        { value: 'length-2', viewValue: 'Yard', convert: 36 },
        { value: 'length-3', viewValue: 'Centimeter', convert: 2.54 },
      ];
      this.selectedQuantity = this.quantity[0].value;
    }
    if (val == "volume") {
      this.quantity = [
        { value: 'volume-0', viewValue: 'Litre', convert: 1 },
        { value: 'volume-1', viewValue: 'Gallon', convert: 3.78 },
      ];
      this.selectedQuantity = this.quantity[0].value;
    }
    if (val == "temperature") {
      this.quantity = [
        { value: 'temperature-0', viewValue: 'Celsius', convert: 1 },
        { value: 'temperature-1', viewValue: 'Fahrenheit', convert: 1 },
      ];
      this.selectedQuantity = this.quantity[0].value;
    }

  }
  selectChangeFrom(event) {
    this.quantity.forEach(element => {
      if (element.value == event) {
        this.value1 = element.convert
      }
    });
    console.log(this.value1)

  }
  selectChangeTo(event) {
    this.quantity.forEach(element => {

      if (element.value == event) {
        this.value2 = element.convert
      }
    });
    console.log(this.value2)
  }
  fromValue(event) {
    this.input1 = event.target.value
  }
}
