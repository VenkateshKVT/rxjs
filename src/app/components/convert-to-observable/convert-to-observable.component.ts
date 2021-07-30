import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-convert-to-observable',
  templateUrl: './convert-to-observable.component.html',
  styleUrls: ['./convert-to-observable.component.css']
})
export class ConvertToObservableComponent implements OnInit, AfterViewInit {

  postsArray = [
    { title: "Title1", description: "desc 1" },
    { title: "Title1", description: "desc 1" },
    { title: "Title1", description: "desc 1" }
  ]

  postsArrayObservable$ = from(this.postsArray);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the promise... send data')
    }, 3000);
  });

  promiseObservable$ = from(this.promise);

  constructor() {

    // Array to Observable
    this.postsArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("complete!")
    });

    // Promise to obseravable
    this.promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("complete!, this is for promise")
    });
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Event handling using Observable
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) =>  console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Event handling in observable complete!!")
     })
  }

}
