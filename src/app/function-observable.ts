import { Observable } from "rxjs";

export function functionObs() {
    console.log("Function call");
    return '1';

    return '2' // dead code
}


export const funcObservable = new Observable((observer) => {
    console.log('Observable call');

    observer.next('1');
    observer.next('2');
    setTimeout(() => {
        observer.next('3')
    }, 1000)
});