import { Component } from "@angular/core";
import { CallNumber } from '@ionic-native/call-number';
 
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
  
  constructor(private callNumber: CallNumber) {
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

  cptMauritel() {
    this.callNumber.callNumber("#123#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
  min10Mattel() {
    this.callNumber.callNumber("*167*1#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
  min20Mattel() {
    this.callNumber.callNumber("*167*2#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
  min30Mattel() {
    this.callNumber.callNumber("*167*3#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

  cptMattel() {
    this.callNumber.callNumber("*130#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }
  cptChinguitel() {
    this.callNumber.callNumber("*222#", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

  recharge(){
    this.finalVal = this.startNo+this.inputNo+this.endNo;
    this.callNumber.callNumber(this.finalVal, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(res => console.log('Error launching dialer', res));
  }

}
