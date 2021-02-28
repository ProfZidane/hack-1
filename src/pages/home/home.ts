import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LangagePage } from '../langage/langage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLangagePage() {
    this.navCtrl.push(LangagePage);
  }

}
