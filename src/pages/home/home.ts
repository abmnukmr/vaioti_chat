import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatbotPage} from "../chatbot/chatbot";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any=[{"name":"ABhimanyu","image":"../../assets/image/abmnu.jpg","email":"abmnukmr@gmail.com"},{"name":"Davis Deep","image":"../../assets/image/dp.png","email":"davis_deep@gmail.com"},{"name":"Rohit Nandan","image":"../../assets/image/dp.png","email":"nandan_rohit@gmail.com"},{"name":"Sumit Singh","image":"../../assets/image/dp.png","email":"nandan_rohit@gmail.com"}]
  constructor(public navCtrl: NavController) {

  }

  gotochatbot(name,image,email){

    this.navCtrl.push(ChatbotPage,{"name":name,"image":image,"email":email})

  }


}
