import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {ProfilePage} from "../profile/profile";
import {StreamPage} from "../stream/stream";
import {DialerPage} from "../dialer/dialer";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = StreamPage;
  tab4Root = DialerPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  }
}
