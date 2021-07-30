import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4Service } from 'src/app/services/observer4.service';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const newObservable = new Observable<number>((observer) => {
      for(var i=0; i<4; i++) {
        observer.next(i);
      }
      if(i===4) {
        // observer.error("i value is: "+ i);
      } 
      observer.complete();
    });
    
    // First way of subscribe to an observable.
    let observer = {
      next: (data: number) => console.log('Observer 1 '+data),
      error: (error: string) => console.log(error),
      complete: () => console.log("First way of observable subscribe complete!")
    }

    newObservable.subscribe((observer));

    // Second way of subscribe to an observable
    newObservable.subscribe({
      next: (data: number) => console.log('Observer 2: ' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log("Second way of subscribe to New observable complete!")
    });

    // Third way of subscribe
    newObservable.subscribe(
      (data: number) => console.log('Observer 3: ' + data),
      (error: string) => console.log(error),
      () => console.log("Third way of subscribe to New observable complete!")
    );

    //Forth way of subscribe 
    newObservable.subscribe(new Observer4Service());
  }

}
