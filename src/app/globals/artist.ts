export class Artist {

    artist: string;
    titre: string; 
    cover: string; 

    constructor(artist: string,titre: string,cover: string ){
   
        this.artist= artist
        this.titre = titre
        this.cover = cover
    }

    getArtist():string{
        return this.artist
    }
    getTitre():string{
        return this.titre
    }
    getCover():string{
        return this.cover
    }
   
}