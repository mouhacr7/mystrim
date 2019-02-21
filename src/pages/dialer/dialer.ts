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
    if(operator=="dialog"){
      this.startNo='*130#';
    }else if(operator=="mauritel"){
      this.startNo='*123*';
    }else if(operator=="mattel"){
      this.startNo='*133*';
    }else if(operator=="chinguitel"){
      this.startNo='*222*';
    }
  }

  recharge(){
    this.finalVal=this.startNo+this.inputNo+this.endNo;
    this.callNumber.callNumber(this.finalVal, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

}
