import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
/**
 * Generated class for the VocalComPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocal-com',
  templateUrl: 'vocal-com.html',
})
export class VocalComPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private speech: SpeechRecognition) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalComPage');
  }

  startVocal() {
    // Check feature available
this.speech.isRecognitionAvailable()
.then((available: boolean) => console.log(available))

// Start the recognition process
this.speech.startListening()
.subscribe(
  (matches: Array<string>) => console.log(matches),
  (onerror) => console.log('error:', onerror)
)
  }

}
