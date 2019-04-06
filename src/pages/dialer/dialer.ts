import { Component } from "@angular/core";
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController, NavParams } from "ionic-angular";
 
@Component({
  selector: 'page-dialer',
  templateUrl: 'dialer.html',
})
export class DialerPage {
  startNo:string;
  endNo:string='#';
  inputNo:number;
  finalVal:string;
  relationship:string;
  
  constructor(public navCtrl: NavController, private callNumber: CallNumber, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialerPage');
  }

  operatorSelect(operator){
    if(operator=="mauritel"){
      this.startNo='*123*';
    }else if(operator=="mattel"){
      this.startNo='*133*';
    }else if(operator=="chinguitel"){
      this.startNo='*222*';
    }
  }

  compte_mauritel() {
   return this.callNumber.callNumber("#123#", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  compte_mattel() {
    return this.callNumber.callNumber("#123#", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  compte_chinguitel() {
    return this.callNumber.callNumber("#123#", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  recharge(){
    this.finalVal=this.startNo+this.inputNo+this.endNo;
    return this.callNumber.callNumber(this.finalVal, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

}
