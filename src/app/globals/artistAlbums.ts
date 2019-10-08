export class artistAlbums {

    id: number;
    titre: string; 
    url: string; 

    constructor(id: number,titre: string,url: string ){
   
        this.id= id
        this.titre = titre
        this.url = url
    }

    getId():number{
        return this.id
    }
    getTitre():string{
        return this.titre
    }
    getUrl():string{
        return this.url
    }
   
}