
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { DialerPage } from '../pages/dialer/dialer';
import { CallNumber } from '@ionic-native/call-number';
import { StreamPage } from "../pages/stream/stream";
import { ProfilePage } from "../pages/profile/profile";
import { TabsPage } from '../pages/tabs/tabs';
import { MusicDetailPage } from "../pages/music-detail/music-detail";
import { IonPullupModule } from 'ionic-pullup';


//Components
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { NowPlayingDrawerComponent } from './../components/now-playing-drawer/now-playing-drawer';

@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    StreamPage,
    ProfilePage,
    DialerPage,
    TabsPage,
    MusicDetailPage,
    NowPlayingDrawerComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonPullupModule,
    IonBottomDrawerModule,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({
      appState: mediaStateReducer
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DialerPage,
    StreamPage,
    ProfilePage,
    TabsPage,
    NowPlayingDrawerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AudioProvider,
    CloudProvider,
    AuthService,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler, }
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
