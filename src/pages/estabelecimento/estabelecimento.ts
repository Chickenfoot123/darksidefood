import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-estabelecimento',
  templateUrl: 'estabelecimento.html'
})
export class EstabelecimentoPage {
  lista: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire) {
    this.lista = af.database.list('/teste');
  }
chatPage: any = ChatPage;

}