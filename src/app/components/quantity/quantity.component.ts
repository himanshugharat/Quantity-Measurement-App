import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as SampleJson from "../../../assets/data.json";
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
  isDisable: number;
  tempActiveType: boolean;
  quantity:quantity[]=SampleJson.length;
  selectedQuantity = this.quantity[0].value;
  active: boolean

  constructor() {console.log(SampleJson); }

  ngOnInit(): void {

  }

  getToggelValue(val) {
    if (val == "length") {
       this.quantity = SampleJson.length;
      this.selectedQuantity = this.quantity[0].value;
    }
    if (val == "volume") {
      this.quantity = SampleJson.volume
      this.selectedQuantity = this.quantity[0].value;
    }
    if (val == "temperature") {
      this.quantity = SampleJson.temperature
      this.selectedQuantity = this.quantity[0].value;
    }
  }
  selectChangeFrom(event) {
    console.log(event)
    console.log(`${this.tempActiveType}before`)
    this.quantity.forEach(element => {
      if (element.value == event) {
        if (event == 'temperature-0') {
          this.active = true
          this.tempActiveType = true;

        }
        else if (event == 'temperature-1') {
          this.active = true
          this.tempActiveType = false;

        } else {
          this.active = false
        }
        console.log(`${this.tempActiveType}after`)
        this.valueFrom = element.convert
        this.isDisable=element.place
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

  ConvertedValue() {
    if (this.active) {
      if (this.tempActiveType === true) {
        return (this.inputFrom - 32) * 5 / 9
        //return (this.inputFrom*9/5)+32
      }
      else if (this.tempActiveType === false) {
        //return (this.inputFrom-32)*5/9
        return (this.inputFrom * 9 / 5) + 32
      }
    }
    else {
      return (this.inputFrom * this.valueFrom) / this.valueTo
    }

  }

}
