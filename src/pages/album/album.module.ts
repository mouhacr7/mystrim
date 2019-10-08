import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumPage } from './album';
import {IonPullupModule} from 'ionic-pullup';

@NgModule({
  declarations: [
    AlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumPage),
    IonPullupModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AlbumPageModule {}
