import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Observer4Service implements Observer<number>{

  constructor() { }

  next(data: number) {
    console.log('Observer 4 next => '+ data);
  }

  error(error: string) {
    console.log('Observer 4 error => ' + error);
  }

  complete() {
    console.log('Observer 4 complete by class');
  }
}
