import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ChatbotPage} from "../chatbot/chatbot";
import {LocalstorgaePage} from "../localstorgae/localstorgae";
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  db:any;
  rowss:any;
  lastmessage:string="";
  Lastarray=[];
  val:any;
  user:any=[{"name":"ABhimanyu","image":"assets/image/abmnu.jpg","email":"abmnukmr@gmail.com"},{"name":"Davis Deep","image":"assets/image/dp.png","email":"davis_deep@gmail.com"},{"name":"Rohit Nandan","image":"assets/image/dp.png","email":"nandan_rohit@gmail.com"},{"name":"Sumit Singh","image":"assets/image/dp.png","email":"sumit007@gmail.com"}]
  constructor(public navCtrl: NavController,public Mdl:ModalController) {


  this.refresh();

  }


  refresh(){
    for(let i=0; i<this.user.length;i++)
    {
      var fi=this.getdata(this.user[i].email)
      var t=this.hoto()
      //this.Lastarray.push(this.getdata(this.user[i].email))
      console.log(fi+"gettig"+t+this.lastmessage);

    }
    console.log(this.Lastarray);
  }

  gotochatbot(name,image,email){


    let profileModal = this.Mdl.create(ChatbotPage,{"name":name,"image":image,"email":email});
    profileModal.onDidDismiss(data => {
      this.Lastarray=[]
      this.refresh();
      console.log("hiiii");
    });
    profileModal.present();
  }

  gotone(){
    this.navCtrl.push(LocalstorgaePage);
  }

  setupdb(db){
    this.db = new PouchDB(db);
  }

  sortByAttribue(arr, attribute) {
  return arr.sort(function(a,b) {
    return a.attribute < b.attribute;
     });

  }

  hoto(){

    let sum=4+3;
    return sum;
  }


  getdata(db){
    this.setupdb(db);
   var as;
    this.db.allDocs({include_docs:true},(err,result)=>{
      if(!err){
        this.rowss=result.rows;

        this.rowss.sort((a, b)=> {
          return a.doc.tid -b.doc.tid ;
        });
           let gi=this.rowss[this.rowss.length -1]

            as =gi.doc.message;
            this.lastmessage=as;
           console.log(as);

        this.Lastarray.push(as)
      }
    })

  }

}
