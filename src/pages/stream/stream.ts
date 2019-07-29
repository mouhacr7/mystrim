import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import * as mm from 'music-metadata';
import * as util from 'util';
 


/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.metadatas();
  }

  metadatas() {
    return mm.parseFile('assets/music/Kalash - snitch feat lacrim.mp3')
    .then(  metadata => {
      console.log(util.inspect(metadata, {showHidden: false, depth: null}))
    })
    .catch((err) => {
      console.error(err.message);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
  }


}
