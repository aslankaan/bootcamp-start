import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject, Subscription, timer } from 'rxjs';
import { concatMap, filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  clickSubject = new Subject();

  clickObs$: Observable<any>;
  timerObs$: Observable<number>;

  subscriptions: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.clickObs$ = this.clickSubject.asObservable().pipe(
      map((value, i) => {
        return "Clicked: " + i
      })
    );
    this.timerObs$ = timer(0, 1000);

    this.subscriptions.add(
      this.timerObs$.subscribe((value) => {
        console.log(value);
      })
    )

    // this.subscriptions.add(
    //   this.clickObs$.subscribe((value) => {
    //     console.log(value);
    //   })
    // )


    // this.subscriptions.add(
    //   this.timerObs$.pipe(
    //     filter(value => {
    //       return value >= 5;
    //     }),
    //     map((value) => {
    //       return value * 1000
    //     })
    //   ).subscribe((value) => {
    //     console.log(value);
    //   })
    // )


    // this.subscriptions.add(
    //   this.clickObs$.pipe(
    //     switchMap((value) => {
    //       return this.timerObs$;
    //     })
    //   ).subscribe(console.log)
    // )


    // this.subscriptions.add(
    //   this.clickObs$.pipe(
    //     mergeMap((value) => {
    //       return this.timerObs$;
    //     })
    //   ).subscribe(console.log)
    // )


    // // Note: second timer never starts. concatMap waits observables to finalize to run next
    // this.subscriptions.add(
    //   this.clickObs$.pipe(
    //     concatMap((value) => {
    //       return this.timerObs$;
    //     })
    //   ).subscribe(console.log)
    // )


    // this.subscriptions.add(
    //   this.clickObs$.pipe(
    //     concatMap((value) => {
    //       return this.timerObs$.pipe(
    //         take(5)
    //       );
    //     })
    //   ).subscribe(console.log)
    // )


    // this.subscriptions.add(
    //   combineLatest([this.clickObs$, this.timerObs$]).pipe(
    //     tap(([clickEvent, timerEvent]) => {
    //       console.log(clickEvent + timerEvent);
    //     })
    //   )
    //     .subscribe()
    // )




  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleClick() {
    this.clickSubject.next("clicked");
  }

}
