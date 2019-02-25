import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {ProfilePage} from "../profile/profile";
import {StreamPage} from "../stream/stream";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = StreamPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  // private getAnimationDirection(index):string {
  //   var currentIndex = this.tabIndex;
  //
  //   this.tabIndex = index;
  //
  //   switch (true){
  //     case (currentIndex < index):
  //       return('left');
  //     case (currentIndex > index):
  //       return ('right');
  //   }
  // }
}
