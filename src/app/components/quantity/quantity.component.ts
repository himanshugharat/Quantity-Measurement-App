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
  
  constructor() {} 

  ngOnInit(): void {
  }

}
