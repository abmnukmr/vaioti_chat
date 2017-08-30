import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalstorgaePage } from './localstorgae';

@NgModule({
  declarations: [
    LocalstorgaePage,
  ],
  imports: [
    IonicPageModule.forChild(LocalstorgaePage),
  ],
  exports: [
    LocalstorgaePage
  ]
})
export class LocalstorgaePageModule {}
