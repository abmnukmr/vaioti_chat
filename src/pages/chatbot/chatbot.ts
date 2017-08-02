import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import * as io from 'socket.io-client';

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
 socket:any;
 chats=[];
  message:any;
 self_text:boolean=true;
 clint_text:boolean=true;
 self_image:boolean=true;
 clint_image:boolean=true;
 msg:any;
 chatbox:any;
 type:any;
 user_name;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.socket = io('http://localhost:3000');

    this.socket.on('message', (msg) => {
      console.log("message", msg);
      if(msg.user=="abmnu") this.self_text=false;
      this.chats.push(msg);
      this.scrollToBottom()
      this.chatbox=JSON.stringify(this.chats);
      console.log(this.chats);
    });


    this.socket.on('typing', (msg) => {
     this.type=msg.type;
     console.log(this.type)
    });



    this.getchatdata();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }
  typing()
  {
    this.msg={
      "type":"Typing...",

    }
    this.socket.emit('typing', this.msg);
    setTimeout(() => {
      this.msg={
        "type":"",

      }
      this.socket.emit('typing', this.msg);
    },1000);

  }

  send() {
    this.msg={
      "user":this.user_name,
      "message":this.message
    }
    if(this.message != ''){
      this.socket.emit('message', this.msg);
    }
    this.message = '';
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
