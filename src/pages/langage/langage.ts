import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComPage } from '../com/com';
import { TextComPage } from '../text-com/text-com';

/**
 * Generated class for the LangagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-langage',
  templateUrl: 'langage.html',
})
export class LangagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LangagePage');
  }

  selectLanguage(lng) {
    console.log(lng);
    this.navCtrl.push(TextComPage);
  }

}
