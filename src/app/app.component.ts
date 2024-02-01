import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
// import './store/store';
// import { StoreInterface } from './store/store';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reham ng-rx';
  count: number = 0;

  //-----------------------------------------
  constructor(
    // private store: Store<StoreInterface>
  ) {
    // this.store.subscribe(data:any => {
    //   console.log('reham - store data = ', data);
    //   this.count = data.counter.n;
    // })
  }
  //-----------------------------------------
  increase() {

    console.log('count = ', this.count);
    this.count += 1;
    // this.store.dispatch({
    //   type: 'increament'
    // })
  }
  //-----------------------------------------
  reset() {
    this.count = 0;
  }


  //-----------------------------------------
  decrease() {
    this.count -= 1;
    console.log('count = ', this.count);

    // this.store.dispatch({
    //   type: 'decreament'
    // })
  }
}
