import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatbotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html',
})
export class ChatbotPage {
 name:any;
 image:any;
 email:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.getchatdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatbotPage');
  }
getchatdata(){
   this.name= this.navParams.get("name")
    this.email=this.navParams.get("email")
    this.image=this.navParams.get("image")
}

goback(){
  this.navCtrl.pop();
}

}
