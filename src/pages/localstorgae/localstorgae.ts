import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

/**
 * Generated class for the LocalstorgaePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-localstorgae',
  templateUrl: 'localstorgae.html',
})
export class LocalstorgaePage {
 db:any;
 chats=[];
 dt:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setupdb();
    this.getdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalstorgaePage');
  }

  setupdb(){
    this.db = new PouchDB('puodoloo');
    }


  getdata(){
    //this.setupdb();
    this.db.allDocs({include_docs:true},(err,result)=>{
      if(!err){
        let  rows=result.rows;
        for(let i=0;i<rows.length;i++){
         this.chats.push(rows[i].doc)
        }
        console.log(this.chats);
      }
    })
  }

  addata()
    {

    if(this.dt!="") {




      var item=[{

        "name":this.dt,
        "tid":Date.now()
       }]

      this.db.bulkDocs( {"docs":item}, (err, result) => {
        if (!err) {
          this.chats.push(item[0]);
          // this.getdata();
          console.log(result);
          this.dt = "";
        }
        else {
          console.log(err)
        }

      })
    }

  }




}
