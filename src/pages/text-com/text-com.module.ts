import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextComPage } from './text-com';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TextComPage,
  ],
  imports: [
    IonicPageModule.forChild(TextComPage),
  ],
})
export class TextComPageModule {}
