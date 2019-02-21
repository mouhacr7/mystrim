
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { mediaStateReducer } from '../providers/store/store';
import { AudioProvider } from '../providers/audio/audio';
import { CloudProvider } from '../providers/cloud/cloud';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/auth0/auth.service';
import { IonicStorageModule } from '@ionic/storage';
import { DialerPage } from './../pages/dialer/dialer';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    DialerPage],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({
      appState: mediaStateReducer
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, DialerPage],
  providers: [
    StatusBar,
    SplashScreen,
    AudioProvider,
    CloudProvider,
    AuthService,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
