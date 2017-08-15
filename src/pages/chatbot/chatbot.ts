import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import * as io from 'socket.io-client';
import * as moment from 'moment'
import {EmojiEvent} from "@ionic-tools/emoji-picker";
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
 showif:boolean=true;
 chats=[];
  toggled: boolean = false;
  message:any;
 self_text:boolean=true;
 clint_text:boolean=true;
 self_image:boolean=true;
 clint_image:boolean=true;
 msg:any;
 chatbox:any;

 type:any;
 user_name;
  url:any;
  @ViewChild(Content)content: Content;

  @ViewChild('textarea')textarea;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.getchatdata();
   console.log(this.url)
    this.socket = io('https://vioti.herokuapp.com/');
    this.socket.emit('socketjoined',this.email)

    this.socket.on('message', (msg) => {
      console.log("message", msg);
      if(msg.user=="abmnu") this.self_text=false;
      this.ScrollToBottom();

      //this.linkify(msg);
      this.showif=false;
      this.chats.push(msg);
      this.chatbox=JSON.stringify(this.chats);
      console.log(this.chats);
    });


    this.socket.on('typing', (msg) => {
     this.type=msg.type;
     console.log(this.type)
    });



  }


  ionviewWillEnter(){

  }



  typing()
  {
     this.ScrollToBottom();
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

  ScrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }
  send() {
    this.msg={
      "user":this.user_name,
      "email":this.email,
      "message":this.message,
      "time":moment().format('LT')
  }
    if(this.message != ''  ){
      this.socket.emit('message', this.msg);
    }
    else {

    }
    this.message = '';
   // this.setfo();
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

  handleSelection(event) {
    this.message=  event.char+ " " +this.message;

  }

setfo(){
  setTimeout(() => {
  this.textarea.setFocus();
    this.ScrollToBottom()

  },400);
}

}
