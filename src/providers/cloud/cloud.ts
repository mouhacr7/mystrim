import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CloudProvider {
  files:any = [
    { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect by Ed Sheeran'
    },
    {
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan'
    },
    { url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Penny Lane by The Beatles'
    }
  ];

  albums:any = [
   {
      artist : 'Adviser',
      titre: 'HSKS',
      cover : 'assets/imgs/adviser1.jpeg'
   },
   {
      artist : 'Hamzo Bryn',
      titre: 'HSKS',
      cover : 'assets/imgs/hamzo_n.jpg'
   },
   {
      artist : 'Ceepee',
      titre: 'HSKS',
      cover : 'assets/imgs/ceepee.jpg'
   },
   {
      artist : 'El general',
      titre: 'HSKS',
      cover : 'assets/imgs/el_general.jpg'
   },
   {
      artist : 'Mozbi',
      titre: 'HSKS',
      cover : 'assets/imgs/mozbi.jpg'
   },
   {
      artist : 'Taleb',
      titre: 'HSKS',
      cover : 'assets/imgs/taleb.jpeg'
   },
   {
      artist : 'Tonia',
      titre: 'HSKS',
      cover : 'assets/imgs/tonia.jpg'
   },
   {
      artist : 'Woulad Lblad',
      titre: 'HSKS',
      cover : 'assets/imgs/wldbld.jpg'
   },  
    {
       artist : 'Kalash',
       titre: 'Mwaka moon',
       cover : 'assets/imgs/Folder.jpg'
    },
    {
       artist : 'Damso',
       titre: 'Ipséité',
       cover : 'assets/imgs/Ipseite.jpg'
    },
    {
       artist : 'Booba',
       titre: 'Trone',
       cover : 'assets/imgs/Booba.jpg'
    },
    {
       artist : 'Post malone',
       titre: 'beerbongs & bentleys',
       cover : 'assets/imgs/postMalone.jpg'
    },
    {
       artist : 'Migos',
       titre: 'Culture II',
       cover : 'assets/imgs/Migos.jpg'
    },
    {
       artist : 'Damso',
       titre: 'Batterie faible',
       cover : 'assets/imgs/Damso.jpg'
    }
    

  ];
  
  slides:any = [

   {
      artist : 'Mozbi',
      titre: 'HSKS',
      cover : 'assets/imgs/mozbi.jpg'
   },
   {
      artist : 'Taleb',
      titre: 'HSKS',
      cover : 'assets/imgs/taleb.jpeg'
   },
   {
      artist : 'Tonia',
      titre: 'HSKS',
      cover : 'assets/imgs/tonia.jpg'
   }

  ]
  getFiles() {
    return of(this.files);
  }
  getSlides() {
    return of(this.slides);
  }
  
  getArtistAlbums(){ 
    return of(this.albums);
  }
}
