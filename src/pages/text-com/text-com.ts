import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ValidationPage } from '../validation/validation';

/**
 * Generated class for the TextComPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-com',
  templateUrl: 'text-com.html',
})
export class TextComPage {
data = {
  immatriculation : '',
  marque : "",
  couleur : "",
  type : ""
};
  err;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextComPage');

  }

  goToValidation() {
    let loading = this.loadingController.create({
      content: 'Patientez s\'il vous plait ...'
    });

    let loading2 = this.loadingController.create({
      content: 'Envoi des coordonnées GPS ....'
    });



    loading.present();

    console.log(this.data);

    setTimeout(() => {
      loading.dismiss();
      loading2.present();
      setTimeout( () => {
        loading2.dismiss();
        this.navCtrl.push(ValidationPage);
      }, 2000);
    }, 5000);
  }


  gpsSimulation() {
    let loading2 = this.loadingController.create({
      content: 'Envoi des coordonnées GPS ....'
    });

    loading2.present();

    setTimeout(() => {
      loading2.dismiss();

    }, 5000);
  }

  verificationForm() {
    if (this.data.immatriculation === '' || this.data.marque === '' || this.data.couleur === '' || this.data.type) {
      return true;
    } else {
      return false;
    }
  }

}
