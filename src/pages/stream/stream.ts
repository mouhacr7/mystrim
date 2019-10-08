import { Component, AfterViewInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Genre } from '../../app/globals/genre';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import { genres } from '../../app/globals/constants'
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


export class StreamPage implements AfterViewInit{

  public genres:Observable<Genre[]>
  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit(){
    this.genres = Observable.of(genres)
  
  }

  browseGenre(genre:Genre){
    this.navCtrl.push("GenreBrowserPage",genre,{direction:'top',updateUrl:false})
  }
}