import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leakage',
  templateUrl: './memory-leakage.component.html',
  styleUrls: ['./memory-leakage.component.css']
})
export class MemoryLeakageComponent implements OnInit {
  obsSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {

    const newObseravble= new Observable(observer => {
      let i=0;
      let interval = setInterval(() => {
        console.log('Set interval: ' + i);
        i++;
      }, 1000);

      return () => {
        // This gets called when observer.error is called or when observer is unsubscribed.
        console.log('Anonymous fn, called when obs is unsubscribed or obserevr.error is called');
        clearInterval(interval);
      }
    });

    this.obsSubscription = newObseravble.subscribe(() => {
      
    })
  }

  clearSubscription() {
    this.obsSubscription.unsubscribe();
  }

}
