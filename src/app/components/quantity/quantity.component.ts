import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface quantity {
  value: string;
  viewValue: string;
  convert: number;
  place: number;
}
@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  valueFrom: number
  valueTo: number
  content: string
  inputFrom: number
  inputTo: number
  form: FormGroup;
  disablePlace: number;
  quantity: quantity[] = [
    { value: 'length-0', viewValue: 'Feet', convert: 12, place: 0 },
    { value: 'length-1', viewValue: 'Inch', convert: 1, place: 1 },
    { value: 'length-2', viewValue: 'Yard', convert: 36, place: 2 },
    { value: 'length-3', viewValue: 'Centimeter', convert: 0.4, place: 3 },
  ];
  selectedQuantity = this.quantity[0].value;

  constructor() { }

  ngOnInit(): void {

  }

  getToggelValue(val) {
    if (val == "length") {
      this.quantity = [
        { value: 'length-0', viewValue: 'Feet', convert: 12, place: 0 },
        { value: 'length-1', viewValue: 'Inch', convert: 1, place: 1 },
        { value: 'length-2', viewValue: 'Yard', convert: 36, place: 2 },
        { value: 'length-3', viewValue: 'Centimeter', convert: 0.4, place: 3 },
      ];
      this.selectedQuantity = this.quantity[0].value;
    }
    if (val == "volume") {
      this.quantity = [
        { value: 'volume-0', viewValue: 'Litre', convert: 1, place: 0 },
        { value: 'volume-1', viewValue: 'Gallon', convert: 3.78, place: 1 },
      ];
      this.selectedQuantity = this.quantity[0].value;
    }
    if (val == "temperature") {
      this.quantity = [
        { value: 'temperature-0', viewValue: 'Celsius', convert: 1, place: 0 },
        { value: 'temperature-1', viewValue: 'Fahrenheit', convert: 1, place: 1 },
      ];
      this.selectedQuantity = this.quantity[0].value;
    }
  }
  selectChangeFrom(event) {
    this.quantity.forEach(element => {
      if (element.value == event) {
        this.valueFrom = element.convert
        this.disablePlace = element.place
      }
    });
  }
  selectChangeTo(event) {
    this.quantity.forEach(element => {

      if (element.value == event) {
        this.valueTo = element.convert
      }
    });
  }
  fromValue(event) {
    this.inputFrom = event.target.value
  }

}
