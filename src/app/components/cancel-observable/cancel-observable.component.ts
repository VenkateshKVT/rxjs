import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancel-observable',
  templateUrl: './cancel-observable.component.html',
  styleUrls: ['./cancel-observable.component.css']
})
export class CancelObservableComponent implements OnInit {
  timerSubscription!: Subscription;
  
  constructor() { }

  ngOnInit(): void {
    const newObs = interval(1000);

    this.timerSubscription = newObs.subscribe(data => {
      console.log(data);
    })
  }

  cancelTimer(event: Event) {
    event?.preventDefault();
    console.log('Cancel the observable');
    this.timerSubscription.unsubscribe();
  }

}
