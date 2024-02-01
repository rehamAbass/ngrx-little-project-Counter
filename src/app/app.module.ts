import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { counterReducer } from './store/store';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent,
  ],
  imports: [
    //if not standalone :
    // BrowserModule,
    // StoreModule.forRoot({ counter: counterReducer, auth: authReducer })// here gonna be all the reducers
  ],
  providers: [
  ],
  bootstrap: [
    // AppComponent,
  ],
})
export class AppModule { }
