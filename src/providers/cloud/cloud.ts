import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CloudProvider {
  files:any = [
    // { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
    //   name: 'Perfect by Ed Sheeran'
    // },
    // {
    //   url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
    //   name: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan'
    // },
    // { url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
    //   name: 'Penny Lane by The Beatles'
    // }
    {
       url : 'assets/music/Kalash - i can see why feat kig kosa.mp3',
       name: 'Kalash - i can see why feat kig kosa'
    },
    {
       url : 'assets/music/Kalash - ivory.mp3',
       name: 'Kalash - ivory'
    },
    {
       url : 'assets/music/Kalash - mode avion.mp3',
       name: 'Kalash - mode avion'
    },
    {
       url : 'Kalash - assets/music/Kalash - mwaka moon feat damso.mp3',
       name: 'mwaka moon feat damso'
    },
    {
       url : 'assets/music/Kalash - mwaka story.mp3',
       name: 'Kalash - mwaka story'
    },
    {
       url : 'assets/music/Kalash - snitch feat lacrim.mp3',
       name: 'Kalash - snitch feat lacrim'
    },
    {
       url : 'assets/music/Kalash - yen a vla.mp3',
       name: 'Kalash - yen a vla'
    }

  ];
  getFiles() {
    return of(this.files);
  }
}
