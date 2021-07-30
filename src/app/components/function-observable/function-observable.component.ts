import { Component, OnInit } from '@angular/core';
import { funcObservable, functionObs } from 'src/app/function-observable';

@Component({
  selector: 'app-function-observable',
  templateUrl: './function-observable.component.html',
  styleUrls: ['./function-observable.component.css']
})
export class FunctionObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //Function call
    console.log('Before Function call');
    console.log(functionObs());
    console.log('After Function call');

    // Obseravable call
    console.log('Before Observable call');
    funcObservable.subscribe((data) => {
      console.log(data);
    });
    console.log('After Observable call');
  }

}
