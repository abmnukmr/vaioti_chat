import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

/*
  Generated class for the ChatbotsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatbotsProvider {
 socket:any;
  constructor() {
    console.log('Hello ChatbotsProvider Provider');
    this.socket = io('https://vioti.herokuapp.com/');


  }






}
