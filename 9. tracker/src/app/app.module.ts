import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from "../config/firebase.config";

// Servicios / providers
import { UsuarioService } from "../providers/usuario";
import { UbicacionService } from "../providers/ubicacion";

// storage
import { IonicStorageModule } from '@ionic/storage';

// Plugins
import { Geolocation } from '@ionic-native/geolocation';

// Mapas
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    UbicacionService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
