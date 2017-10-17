import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyAECb1XLDRSuG1k5kuRdqO184bNBR4rP4s",
  authDomain: "tracker-8f49f.firebaseapp.com",
  databaseURL: "https://tracker-8f49f.firebaseio.com",
  projectId: "tracker-8f49f",
  storageBucket: "tracker-8f49f.appspot.com",
  messagingSenderId: "145943821416"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y'
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
