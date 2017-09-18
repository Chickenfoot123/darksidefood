import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  lista: FirebaseListObservable<any>;
  mensagem: string;
  data: Date;
  autenticacao: boolean;
  user: string;
  messaging: any;
  
  constructor(public af: AngularFire) {
    this.lista = af.database.list('/Estabelecimentos/Takêdo/chat');
  }

  enviar(){

    let m = {
      texto: this.mensagem,
      data: new Date().toISOString(),
      user: "ADMIN"
    };
    this.lista.push(m).then(() => {
      this.mensagem = "";

    });
  }
}
