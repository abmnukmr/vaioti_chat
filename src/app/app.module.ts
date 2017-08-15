import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChatbotPage} from "../pages/chatbot/chatbot";
import { LinkifyPipe } from '../pipes/linkify/linkify';
import { ElasticModule } from 'angular2-elastic';
import {EmojiPickerModule} from "@ionic-tools/emoji-picker";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatbotPage,
    LinkifyPipe
  ],
  imports: [
    BrowserModule,
    ElasticModule,
    EmojiPickerModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatbotPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
