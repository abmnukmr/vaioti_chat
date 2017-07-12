import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatbotPage} from "../chatbot/chatbot";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any=[{"name":"ABhimanyu","iamge":"assets/image/abmnu.jpg","email":"abmnukmr@gmail.com"},{"name":"Davis Deep","iamge":"assets/image/abmnu.jpg","email":"davis_deep@gmail.com"},{"name":"Rohit Nandan","iamge":"assets/image/abmnu.jpg","email":"nandan_rohit@gmail.com"}]
  constructor(public navCtrl: NavController) {

  }

  gotochatbot(name,image,email){

    this.navCtrl.push(ChatbotPage,{"name":name,"image":image,"email":email})

  }


}
