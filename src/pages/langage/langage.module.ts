import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LangagePage } from './langage';

@NgModule({
  declarations: [
    LangagePage,
  ],
  imports: [
    IonicPageModule.forChild(LangagePage),
  ],
})
export class LangagePageModule {}
